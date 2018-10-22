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
        <label for="Male">
          <input type="radio" class="voteSex" name="Sex" value="Male" v-model="newVote.sex" required>
        男性
        </label>
        <label for="Female">
          <input type="radio" class="voteSex" name="Sex" value="Female" v-model="newVote.sex">
        女性
        </label>
        <label for="Others">
          <input type="radio" class="voteSex" name="Sex" value="Others" v-model="newVote.sex">
        其他
        </label>
      </div>
      <div class="form-group">
        <span>*Q2: 你的性傾向為？{{ ' ' + newVote.orientation }}</span>
        <br>
        <label for="Homosexual">
          <input type="radio" class="voteOrientation" name="Orientation" value="Homosexual" v-model="newVote.orientation" required>
        同性戀
        </label>
        <label for="Bisexual">
          <input type="radio" class="voteOrientation" name="Orientation" value="Bisexual" v-model="newVote.orientation">
        雙性戀
        </label>
        <label for="Heterosexual">
          <input type="radio" class="voteOrientation" name="Orientation" value="Heterosexual" v-model="newVote.orientation">
        異性戀
        </label>
        <label for="Asexual">
          <input type="radio" class="voteOrientation" name="Orientation" value="Asexual" v-model="newVote.orientation">
        無性戀
        </label>
        <label for="Pansexual">
          <input type="radio" class="voteOrientation" name="Orientation" value="Pansexual" v-model="newVote.orientation">
        泛性戀
        </label>
        <label for="Others">
          <input type="radio" class="voteOrientation" name="Orientation" value="Others" v-model="newVote.orientation">
        其他
        </label>
      </div>
      <div class="form-group">
        <span>*Q3: 你認為自己的身高？{{ ' ' + newVote.height }}</span>
        <br>
        <label for="Short">
          <input type="radio" class="voteHeight" name="Height" value="Short" v-model="newVote.height" required>
        矮
        </label>
        <label for="High">
          <input type="radio" class="voteHeight" name="Height" value="High" v-model="newVote.height">
        高
        </label>
      </div>
      <div class="form-group">
        <span>*Q4: 你認為自己的體重？{{ ' ' + newVote.weight }}</span>
        <br>
        <label for="Light">
          <input type="radio" class="voteWeight" name="Weight" value="Light" v-model="newVote.weight" required>
        輕
        </label>
        <label for="Heavy">
          <input type="radio" class="voteWeight" name="Weight" value="Heavy" v-model="newVote.weight">
        重
        </label>
      </div>
      <div class="form-group">
        <span>*Q5: 你認為自己的經濟狀況？{{ ' ' + newVote.rich }}</span>
        <br>
        <label for="very-low">
          <input type="radio" class="voteRich" name="Rich" value="very-low" v-model="newVote.rich" required>
        極低
        </label>
        <label for="low">
          <input type="radio" class="voteRich" name="Rich" value="low" v-model="newVote.rich">
        低
        </label>
        <label for="ordinary">
          <input type="radio" class="voteRich" name="Rich" value="ordinary" v-model="newVote.rich">
        中
        </label>
        <label for="high">
          <input type="radio" class="voteRich" name="Rich" value="high" v-model="newVote.rich">
        高
        </label>
        <label for="very-high">
          <input type="radio" class="voteRich" name="Rich" value="very-high" v-model="newVote.rich">
        極高
        </label>
      </div>
      <div class="form-group">
        <span>*Q6: 你的學貸狀況？{{ ' ' + newVote.loan }}</span>
        <br>
        <label for="True">
          <input type="radio" class="voteLoan" name="Loan" value="True" v-model="newVote.loan" required>
        有
        </label>
        <label for="False">
          <input type="radio" class="voteLoan" name="Loan" value="False" v-model="newVote.loan">
        無
        </label>
      </div>
      <div class="form-group">
        <span>*Q7: 你的關係狀態？{{ ' ' + newVote.relationship }}</span>
        <br>
        <label for="Single">
          <input type="radio" class="voteRelationship" name="Relationship" value="Single" v-model="newVote.relationship" required>
        單身
        </label>
        <label for="Not-single">
          <input type="radio" class="voteRelationship" name="Relationship" value="Not-single" v-model="newVote.relationship">
        非單身
        </label>
      </div>
      <div class="form-group">
        <span>*Q8: 你的家庭模式？{{ ' ' + newVote.family }}</span>
        <br>
        <label for="One-parent">
          <input type="radio" class="voteFamily" name="Family" value="One-parent" v-model="newVote.family" required>
        單親家庭
        </label>
        <label for="Two-parent">
          <input type="radio" class="voteFamily" name="Family" value="Two-parent" v-model="newVote.family">
        雙親家庭
        </label>
        <label for="Stepfamily">
          <input type="radio" class="voteFamily" name="Family" value="Stepfamily" v-model="newVote.family">
        繼親家庭
        </label>
        <label for="Three-generations">
          <input type="radio" class="voteFamily" name="Family" value="Three-generations" v-model="newVote.family">
        三代家庭
        </label>
        <label for="Intergenerational">
          <input type="radio" class="voteFamily" name="Family" value="Intergenerational" v-model="newVote.family">
        隔代家庭
        </label>
        <label for="Others">
          <input type="radio" class="voteFamily" name="Family" value="Others" v-model="newVote.family">
        其他
        </label>
      </div>
      <div class="form-group">
        <span>*Q9: 你的族群認同？{{ ' ' + newVote.population }}</span>
        <br>
        <label for="Hakka">
          <input type="radio" class="votePopulation" name="Population" value="Hakka" v-model="newVote.population" required>
        客家族群
        </label>
        <label for="Minnan">
          <input type="radio" class="votePopulation" name="Population" value="Minnan" v-model="newVote.population">
        閩南族群
        </label>
        <label for="Han">
          <input type="radio" class="votePopulation" name="Population" value="Han" v-model="newVote.population">
        漢人
        </label>
        <label for="Aborigines">
          <input type="radio" class="votePopulation" name="Population" value="Aborigines" v-model="newVote.population">
        原住民族
        </label>
        <label for="Immigrant">
          <input type="radio" class="votePopulation" name="Population" value="Immigrant" v-model="newVote.population">
        新住民
        </label>
        <label for="Others">
          <input type="radio" class="votePopulation" name="Population" value="Others" v-model="newVote.population">
        其他
        </label>
      </div>
      <div class="form-group">
        <span>*Q10: 你的國籍？{{ ' ' + newVote.country }}</span>
        <br>
        <label for="PRC">
          <input type="radio" class="voteCountry" name="Country" value="PRC" v-model="newVote.country" required>
        中華人民共和國
        </label>
        <label for="ROC">
          <input type="radio" class="voteCountry" name="Country" value="ROC" v-model="newVote.country">
        中華民國
        </label>
        <label for="TWN">
          <input type="radio" class="voteCountry" name="Country" value="TWN" v-model="newVote.country">
        台灣
        </label>
        <label for="HK">
          <input type="radio" class="voteCountry" name="Country" value="HK" v-model="newVote.country">
        香港
        </label>
        <label for="MO">
          <input type="radio" class="voteCountry" name="Country" value="MO" v-model="newVote.country">
        澳門
        </label>
        <label for="MYS">
          <input type="radio" class="voteCountry" name="Country" value="MYS" v-model="newVote.country">
        馬來西亞
        </label>
        <label for="KOR">
          <input type="radio" class="voteCountry" name="Country" value="KOR" v-model="newVote.country">
        大韓民國
        </label>
        <label for="Others">
          <input type="radio" class="voteCountry" name="Country" value="Others" v-model="newVote.country">
        其他
        </label>
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
