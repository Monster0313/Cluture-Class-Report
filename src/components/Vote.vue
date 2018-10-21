<template>
  <div class="voteBox">
    <div class="title">
      <h1 v-if="!finish">傳播與文化 互動問卷</h1>
    </div>
    <div class="subtitle" v-if="!finish">
      <p>本問卷不會留下任何隱私資料，敬請安心填寫。</p>
    </div>
    <form id="form" class="voteForm" v-on:submit.prevent="addVote" v-if="!finish">
      <div class="form-group">
        <span>*Q1: 你的生理性別為？{{ ' ' + newVote.sex }}</span>
        <br>
        <input type="radio" class="voteSex" name="Sex" value="Male" v-model="newVote.sex" required>
        <label for="Male">男性</label>
        <input type="radio" class="voteSex" name="Sex" value="Female" v-model="newVote.sex">
        <label for="Female">女性</label>
        <input type="radio" class="voteSex" name="Sex" value="Others" v-model="newVote.sex">
        <label for="Others">其他</label>
      </div>
      <div class="form-group">
        <span>*Q2: 你的性傾向為？{{ ' ' + newVote.orientation }}</span>
        <br>
        <input type="radio" class="voteOrientation" name="Orientation" value="Homosexual" v-model="newVote.orientation" required>
        <label for="Homosexual">同性戀</label>
        <input type="radio" class="voteOrientation" name="Orientation" value="Bisexual" v-model="newVote.orientation">
        <label for="Bisexual">雙性戀</label>
        <input type="radio" class="voteOrientation" name="Orientation" value="Heterosexual" v-model="newVote.orientation">
        <label for="Heterosexual">異性戀</label>
        <input type="radio" class="voteOrientation" name="Orientation" value="Asexual" v-model="newVote.orientation">
        <label for="Asexual">無性戀</label>
        <input type="radio" class="voteOrientation" name="Orientation" value="Pansexual" v-model="newVote.orientation">
        <label for="Pansexual">泛性戀</label>
        <input type="radio" class="voteOrientation" name="Orientation" value="Others" v-model="newVote.orientation">
        <label for="Others">其他</label>
      </div>
      <div class="form-group">
        <span>*Q3: 你認為自己的身高？{{ ' ' + newVote.height }}</span>
        <br>
        <input type="radio" class="voteHeight" name="Height" value="Short" v-model="newVote.height" required>
        <label for="Short">矮</label>
        <input type="radio" class="voteHeight" name="Height" value="High" v-model="newVote.height">
        <label for="High">高</label>
      </div>
      <div class="form-group">
        <span>*Q4: 你認為自己的體重？{{ ' ' + newVote.weight }}</span>
        <br>
        <input type="radio" class="voteWeight" name="Weight" value="Light" v-model="newVote.weight" required>
        <label for="Light">輕</label>
        <input type="radio" class="voteWeight" name="Weight" value="Heavy" v-model="newVote.weight">
        <label for="Heavy">重</label>
      </div>
      <div class="form-group">
        <span>*Q5: 你認為自己的經濟狀況？{{ ' ' + newVote.rich }}</span>
        <br>
        <input type="radio" class="voteRich" name="Rich" value="1" v-model="newVote.rich" required>
        <label for="1">極低</label>
        <input type="radio" class="voteRich" name="Rich" value="2" v-model="newVote.rich">
        <label for="2">低</label>
        <input type="radio" class="voteRich" name="Rich" value="3" v-model="newVote.rich">
        <label for="3">中</label>
        <input type="radio" class="voteRich" name="Rich" value="4" v-model="newVote.rich">
        <label for="4">高</label>
        <input type="radio" class="voteRich" name="Rich" value="5" v-model="newVote.rich">
        <label for="5">極高</label>
      </div>
      <div class="form-group">
        <span>*Q6: 你的學貸狀況？{{ ' ' + newVote.loan }}</span>
        <br>
        <input type="radio" class="voteLoan" name="Loan" value="True" v-model="newVote.loan" required>
        <label for="True">有</label>
        <input type="radio" class="voteLoan" name="Loan" value="False" v-model="newVote.loan">
        <label for="False">無</label>
      </div>
      <div class="form-group">
        <span>*Q7: 你的關係狀態？{{ ' ' + newVote.relationship }}</span>
        <br>
        <input type="radio" class="voteRelationship" name="Relationship" value="0" v-model="newVote.relationship" required>
        <label for="0">單身</label>
        <input type="radio" class="voteRelationship" name="Relationship" value="1" v-model="newVote.relationship">
        <label for="1">非單身</label>
      </div>
      <div class="form-group">
        <span>*Q8: 你的家庭模式？{{ ' ' + newVote.family }}</span>
        <br>
        <input type="radio" class="voteFamily" name="Family" value="0" v-model="newVote.family" required>
        <label for="0">單親家庭</label>
        <input type="radio" class="voteFamily" name="Family" value="1" v-model="newVote.family">
        <label for="1">雙親家庭</label>
        <input type="radio" class="voteFamily" name="Family" value="2" v-model="newVote.family">
        <label for="2">繼親家庭</label>
        <input type="radio" class="voteFamily" name="Family" value="3" v-model="newVote.family">
        <label for="3">三代家庭</label>
        <input type="radio" class="voteFamily" name="Family" value="4" v-model="newVote.family">
        <label for="4">隔代家庭</label>
        <input type="radio" class="voteFamily" name="Family" value="5" v-model="newVote.family">
        <label for="5">其他</label>
      </div>
      <div class="form-group">
        <span>*Q9: 你的族群認同？{{ ' ' + newVote.population }}</span>
        <br>
        <input type="radio" class="votePopulation" name="Population" value="Hakka" v-model="newVote.population" required>
        <label for="Hakka">客家族群</label>
        <input type="radio" class="votePopulation" name="Population" value="Minnan" v-model="newVote.population">
        <label for="Minnan">閩南族群</label>
        <input type="radio" class="votePopulation" name="Population" value="Han" v-model="newVote.population">
        <label for="Han">漢人</label>
        <input type="radio" class="votePopulation" name="Population" value="Aborigines" v-model="newVote.population">
        <label for="Aborigines">原住民族</label>
        <input type="radio" class="votePopulation" name="Population" value="Immigrant" v-model="newVote.population">
        <label for="Immigrant">新住民</label>
        <input type="radio" class="votePopulation" name="Population" value="Others" v-model="newVote.population">
        <label for="Others">其他</label>
      </div>
      <div class="form-group">
        <span>*Q10: 你的國籍？{{ ' ' + newVote.country }}</span>
        <br>
        <input type="radio" class="voteCountry" name="Country" value="PRC" v-model="newVote.country" required>
        <label for="PRC">中華人民共和國</label>
        <input type="radio" class="voteCountry" name="Country" value="ROC" v-model="newVote.country">
        <label for="ROC">中華民國</label>
        <input type="radio" class="voteCountry" name="Country" value="TWN" v-model="newVote.country">
        <label for="TWN">台灣</label>
        <input type="radio" class="voteCountry" name="Country" value="HK" v-model="newVote.country">
        <label for="HK">香港</label>
        <input type="radio" class="voteCountry" name="Country" value="MO" v-model="newVote.country">
        <label for="MO">澳門</label>
        <input type="radio" class="voteCountry" name="Country" value="MYS" v-model="newVote.country">
        <label for="MYS">馬來西亞</label>
        <input type="radio" class="voteCountry" name="Country" value="KOR" v-model="newVote.country">
        <label for="KOR">大韓民國</label>
        <input type="radio" class="voteCountry" name="Country" value="Others" v-model="newVote.country">
        <label for="Others">其他</label>
      </div>
      <input type="submit" class="submit-button" value="送出">
    </form>
  <div class="finish" v-if="finish">
    <h1>感謝你的填寫，可以看台上囉</h1>
    <h1> d(d＇∀＇)</h1>
  </div>
  </div>
</template>

<script>
import Firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyC6ef0dTZ1R0wczOmSMAstuzPPW_VZjnNs',
  authDomain: 'class-culture.firebaseapp.com',
  databaseURL: 'https://class-culture.firebaseio.com',
  projectId: 'class-culture',
  storageBucket: 'class-culture.appspot.com',
  messagingSenderId: '949969598489'
}

let app = Firebase.initializeApp(config)
let db = app.database()

let voteRef = db.ref('votes')

export default {
  name: 'Vote',
  firebase: {
    votes: voteRef
  },
  data () {
    return {
      finish: false,
      newVote: {          /* eslint-disable */
        sex: '',          // 生理性別- 男性 女性 雙性
        orientation: '',  // 性傾向- 同性戀 雙性戀 異性戀 無性戀 泛性戀 其他
        height: '',       // 自認身高- 低 高
        weight: '',       // 自認體重- 輕 重
        rich: '',         // 經濟狀況- 極低 低 中 高 極高
        loan: '',         // 學貸狀況- 有 無
        relationship: '', // 關係狀況- 單身 非單身
        family: '',       // 家庭狀況- 單親 雙親 繼親 三代 隔代 其他
        population: '',   // 族群- 客家人 閩南人 漢人 原住民族 新住民 其他
        country: ''       // 國籍- 中華人民共和國 中華民國 台灣 香港 澳門 馬來西亞 大韓民國 其他 
      }
    }
  },
  methods: {
    addVote: function() {
      voteRef.push(this.newVote);
      this.finish = true;
    }
  }
}
</script>
