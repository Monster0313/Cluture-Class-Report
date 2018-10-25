<template>
  <div class="keynote">
    <div class="side">
      <div class="progress">
        <h1>目前頁數</h1>
        <p> 第{{ page + 1 }}頁 </p>
        <h1>問卷填答</h1>
        <p> {{ votes.length + '人' }} </p>
      </div>
    </div>
    <div class="main">
      <div class="content">
        <div class="title" v-if="contents[page].title">
          <h1>
            {{ contents[page].title }}
          </h1>
        </div>
        <div class="subtitle" v-if="contents[page].subtitle">
          <h2>
            {{ contents[page].subtitle }}
          </h2>
        </div>
        <div class="main-content" v-if="contents[page].content">
          <p>
            {{ contents[page].content }}
          </p>
          <p>{{ contents[page].subcontent }}</p>
        </div>
      </div>
      <div class="list-query" v-if="contents[page].listView">
        <span class="select-span">性別:</span>
        <select class="list-select" v-model="selected[0]">
          <option v-for="(sexOption, index) in sexOptions" :key="index" v-bind:value="sexOption.value">
            {{ sexOption.text }}
          </option>
        </select>
        <span class="select-span">性傾向:</span>
        <select class="list-select" v-model="selected[1]">
          <option v-for="(orientationOption, index) in orientationOptions" :key="index" v-bind:value="orientationOption.value">
            {{ orientationOption.text }}
          </option>
        </select>
        <span class="select-span">身高:</span>
        <select class="list-select" v-model="selected[2]">
          <option v-for="(heightOption, index) in heightOptions" :key="index" v-bind:value="heightOption.value">
            {{ heightOption.text }}
          </option>
        </select>
        <span class="select-span">體重:</span>
        <select class="list-select" v-model="selected[3]">
          <option v-for="(weightOption, index) in weightOptions" :key="index" v-bind:value="weightOption.value">
            {{ weightOption.text }}
          </option>
        </select>
        <span class="select-span">經濟狀況:</span>
        <select class="list-select" v-model="selected[4]">
          <option v-for="(richOption, index) in richOptions" :key="index" v-bind:value="richOption.value">
            {{ richOption.text }}
          </option>
        </select>
        <span class="select-span">學貸狀況:</span>
        <select class="list-select" v-model="selected[5]">
          <option v-for="(loanOption, index) in loanOptions" :key="index" v-bind:value="loanOption.value">
            {{ loanOption.text }}
          </option>
        </select>
        <br>
        <span class="select-span">關係狀態:</span>
        <select class="list-select" v-model="selected[6]">
          <option v-for="(relationshipOption, index) in relationshipOptions" :key="index" v-bind:value="relationshipOption.value">
            {{ relationshipOption.text }}
          </option>
        </select>
        <span class="select-span">家庭型態:</span>
        <select class="list-select" v-model="selected[7]">
          <option v-for="(familyOption, index) in familyOptions" :key="index" v-bind:value="familyOption.value">
            {{ familyOption.text }}
          </option>
        </select>
        <span class="select-span">族群認同:</span>
        <select class="list-select" v-model="selected[8]">
          <option v-for="(populationOption, index) in populationOptions" :key="index" v-bind:value="populationOption.value">
            {{ populationOption.text }}
          </option>
        </select>
        <span class="select-span">國籍:</span>
        <select class="list-select" v-model="selected[9]">
          <option v-for="(countryOption, index) in countryOptions" :key="index" v-bind:value="countryOption.value">
            {{ countryOption.text }}
          </option>
        </select>
        <button class="noDifferent" v-on:click="clearSelect(); isEqual = true"> 清除差異 </button>
      </div>
        <div class="list-view" v-if="contents[page].listView">
          <ul>
            <li class="voteList" v-for="(vote, index) in votes" :key="index"
                v-bind:title="[ '性別：' + vote.sex, ' 性傾向：' + vote.orientation, ' 身高：' + vote.height,
                                ' 體重：' + vote.weight, ' 經濟狀況：' + vote.rich, ' 學貸狀況：' + vote.loan,
                                ' 關係狀態：' + vote.relationship, ' 家庭型態：' + vote.family, ' 族群認同：' + vote.population, ' 國籍：' + vote.country]"
                v-bind:class="[
                  vote.sex === selected[0]? grayClass : '',
                  vote.orientation === selected[1]? grayClass : '',
                  vote.height === selected[2]? grayClass : '',
                  vote.weight === selected[3]? grayClass : '',
                  vote.rich === selected[4]? grayClass : '',
                  vote.loan === selected[5]? grayClass : '',
                  vote.relationship === selected[6]? grayClass : '',
                  vote.family === selected[7]? grayClass : '',
                  vote.population === selected [8]? grayClass : '',
                  vote.country === selected[9]? grayClass : '',
                  isEqual? fullColor: '']">
              <p>
               {{ [vote.sex, vote.orientation, vote.height, vote.weight, vote.rich, vote.loan, vote.relationship, vote.family, vote.population, vote.country] }}
              </p>
            </li>
          </ul>
        </div>
      <div class="main-btn">
          <button class="back-btn"
                  v-if="page > 0"
                  v-on:click="page -= 1">
          Back
          </button>
          <button class="next-btn"
                  v-if="page < contents.length-1"
                  v-on:click="page += 1">
          Next
          </button>
      </div>
    </div>
    <div class="qrcode">
      <h2> {{ qrcode.msg }} </h2>
      <img :src="qrcode.img" width="300px">
      <p> {{ qrcode.url }} </p>
    </div>
  </div>
</template>
<style lang='scss'>
@import '../assets/scss/main-c.scss';
</style>
<script>
import db from '../db.js'

let voteRef = db.ref('votes')

export default {
  name: 'Culture',
  firebase: {
    votes: voteRef
  },
  data () {
    return {
      page: 0,
      hidden: false,
      listView: false,
      isEqual: false,
      fullColor: 'fullColor',
      grayClass: 'grayClass',
      selected: ['', '', '', '', '', '', '', '', '', ''],
      qrcode: {url: 'https://vote.monster0313.me/culture-vote', img: require('@/assets/images/QRCode.png'), msg: '請掃QRCode參與'},
      contents: [
        {
          'title': '差異',
          'subtitle': 'Designer, Engineer:　Monster0313 邱旻鋒'
        },
        {
          'title': '什麼是差異？',
          'subtitle': '今天我會透過互動的方式去思考帶大家去思考'
        },
        {
          'title': '首先',
          'content': '我們來看看你跟前後左右的同學有多麼不同。'
        },
        {
          'listView': true // 只有那一面有顏色，正因為我們有這些差異才創造出這個美麗的世界
        },
        {
          'title': '差異是『比較』出來的',
          'content': '自由人 vs 受刑人； 同性戀 vs 異性戀； 聽人 vs 聾人',
          'subcontent': '或許，你也聽過這樣一句話：「為什麼你都不學學你哥哥呢？」'
        },
        {
          'title': '比較有好有壞',
          'content': '適度的比較有助於彼此互相成長，',
          'subcontent': '但錯誤、過分的比較就會造成巨大的災難。'
        },
        {
          'title': '戰爭、侵略、大屠殺',
          'content': '這些行為都是來自於差異，',
          'subcontent': '且以國家、宗教的力量強調了彼此之間的不同。'
        },
        {
          'title': '但同樣的'
        },
        {
          // eslint-disable-next-line
          'title': '多元、互助、凝聚力',
          'subtitle': '這些美好同樣來自於差異。',
          'content': '當每次遇到颱風、地震與各種重大事故、災難時，',
          'subcontent': '台灣人總會願意貢獻自己微薄的力量幫助他人。'
        },
        {
          'title': '如何讓差異成為動力',
          'subtitle': '一切都取決於你的決定。'
        },
        {
          'title': '最後',
          'subtitle': '11月24日，請回家投票。',
          'content': '讓你的選擇成為可能。'
        }
      ],
      voteContent: [
        voteRef.sex, voteRef.orientation, voteRef.height,
        voteRef.weight, voteRef.rich, voteRef.loan, voteRef.relationship,
        voteRef.family, voteRef.population, voteRef.country],
      sexOptions: [
        {text: '男', value: 'Male'},
        {text: '女', value: 'Female'},
        {text: '其他', value: 'Others'}
      ],
      orientationOptions: [
        {text: '同性戀', value: 'Homosexual'},
        {text: '雙性戀', value: 'Bisexual'},
        {text: '異性戀', value: 'Heterosexual'},
        {text: '無性戀', value: 'Asexual'},
        {text: '泛性戀', value: 'Pansexual'},
        {text: '其他', value: 'Others'}
      ],
      heightOptions: [
        {text: '矮', value: 'Short'},
        {text: '高', value: 'High'}
      ],
      weightOptions: [
        {text: '輕', value: 'Light'},
        {text: '重', value: 'Heavy'}
      ],
      richOptions: [
        {text: '極低', value: 'very-low'},
        {text: '低', value: 'low'},
        {text: '中', value: 'ordinary'},
        {text: '高', value: 'high'},
        {text: '極高', value: 'very-high'}
      ],
      loanOptions: [
        {text: '有', value: 'True'},
        {text: '無', value: 'False'}
      ],
      relationshipOptions: [
        {text: '單身', value: 'Single'},
        {text: '非單身', value: 'Not-single'}
      ],
      familyOptions: [
        {text: '單親家庭', value: 'One-parent'},
        {text: '雙親家庭', value: 'Two-parent'},
        {text: '繼親家庭', value: 'Stepfamily'},
        {text: '三代家庭', value: 'Three-generations'},
        {text: '隔代家庭', value: 'Intergenerational'},
        {text: '其他', value: 'Others'}
      ],
      populationOptions: [
        {text: '客家族群', value: 'Hakka'},
        {text: '閩南族群', value: 'Minnan'},
        {text: '漢人', value: 'Han'},
        {text: '原住民族', value: 'Aborigines'},
        {text: '新住民', value: 'Immigrant'},
        {text: '其他', value: 'Others'}
      ],
      countryOptions: [
        {text: '中華人民共和國', value: 'PRC'},
        {text: '中華民國', value: 'ROC'},
        {text: '台灣', value: 'TWN'},
        {text: '香港', value: 'HK'},
        {text: '澳門', value: 'MO'},
        {text: '馬來西亞', value: 'MYS'},
        {text: '大韓民國', value: 'KOR'},
        {text: '其他', value: 'Others'}
      ]
    }
  },
  methods: {
    clearSelect: function () {
      this.selected = ['', '', '', '', '', '', '', '', '', '']
    }
  },
  watch: {
    // selected.every(i => Object.values(vote).includes(i))
  },
  computed: {
  }
}
</script>
