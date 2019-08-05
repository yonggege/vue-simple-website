import Vue from 'vue'
import Router from 'vue-router'

import main from '@/components/BaseMain'
import tomain from '@/components/BaseToMain'
import about from '@/components/BaseAbout'
import callclick from '@/components/ProductCallClick'
import callSecure from '@/components/ProductCallSecure'
import smallnum from '@/components/ProductSmallNum'
import voiceverify from '@/components/ProductVoiceVerify'
import voicenotice from '@/components/ProductVoiceNotice'
import register from '@/components/UseRegister'
import login from '@/components/UseLogin'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: main,
      meta: {
        showHint: true
      }
    },

    {
      path: '/callclick',
      component: callclick,
      meta: {
        showHint: true
      }
    },
    {
      path: '/callSecure',
      component: callSecure,
      meta: {
        showHint: true
      },
    },
    {
      path: '/smallnum',
      component: smallnum,
      meta: {
        showHint: true
      },
    },
    {
      path: '/voiceverify',
      component: voiceverify,
      meta: {
        showHint: true
      },
    },
    {
      path: '/voicenotice',
      component: voicenotice,
      meta: {
        showHint: true
      },
    },
    {
      path: '/tomain',
      component: tomain,
    },
    {
      path: '/about',
      component: about,
    },
    {
      path: '/register',
      component: register,
      meta: {
        showHint: false
      },
    },
    {
      path: '/login',
      component: login,
      meta: {
        showHint: false
      },
    },
  ]
})
