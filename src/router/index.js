import Vue from 'vue'
import Router from 'vue-router'
import Vote from '@/components/Vote'
import Culture from '@/components/Culture'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/culture-vote',
      name: 'Vote',
      component: Vote
    },
    {
      path: '/culture',
      name: 'Culture',
      component: Culture
    }
  ]
})
