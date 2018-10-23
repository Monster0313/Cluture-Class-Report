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
        </div>
      </div>
      <div class="list-query">
        <form>
          <select name="getSex" id="sex">
          </select>
        </form>
      </div>
        <div class="list-view" v-if="contents[page].listView">
          <ul>
            <li class="voteList" v-for="(vote, index) in votes" :key="index"
                v-bind:title="[ '性別：' + vote.sex, ' 性傾向：' + vote.orientation, ' 身高：' + vote.height,
                                ' 體重：' + vote.weight, ' 經濟狀況：' + vote.rich, ' 學貸狀況：' + vote.loan,
                                ' 關係狀態：' + vote.relationship, ' 家庭型態：' + vote.family, ' 族群認同：' + vote.population, ' 國籍：' + vote.country]" >
              <p>
               {{ [vote] }}
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
        }
      ],
      voteContent: [voteRef.sex, voteRef.orientation, voteRef.height, voteRef.weight, voteRef.rich, voteRef.loan, voteRef.relationship, voteRef.family, voteRef.population, voteRef.country]
    }
  }
}
</script>
