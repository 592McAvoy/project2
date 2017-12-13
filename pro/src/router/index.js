import Vue from 'vue'
import Router from  'vue-router'
import Startups from './components/startups/startups'
import Competition from './components/competition/competition'
import Recruitment from './components/recruitment/recruitment'
import Activities from './components/activities/activities'
import Homepage from './components/homepage/homepage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/startups',
      components: Startups
    },
    {
      path: '/competition',
      components: Competition
    },
    {
      path: '/recruitment',
      components: Recruitment
    },
    {
      path: '/activities',
      components: Activities
    },
    {
      path: '/homepage',
      components: Homepage
    }
  ]
})
