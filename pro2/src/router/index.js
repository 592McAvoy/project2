import Vue from 'vue'
import Router from  'vue-router'
import Startups from 'components/startups/startups'
import Competition from 'components/competition/competition'
import Recruitment from 'components/recruitment/recruitment'
import Activities from 'components/activities/activities'
import Homepage from 'components/homepage/homepage'
import Index from 'components/index/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/startups',
      component: Startups
    },
    {
      path: '/competition',
      component: Competition
    },
    {
      path: '/recruitment',
      component: Recruitment
    },
    {
      path: '/activities',
      component: Activities
    },
    {
      path: '/homepage',
      component: Homepage
    }
  ]
})
