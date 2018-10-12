import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Gallery from '@/components/Gallery'
import Codes from '@/components/Codes'
import Icons from '@/components/Icons'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/codes',
      name: 'Codes',
      component: Codes
    },
    {
      path: '/icons',
      name: 'Icons',
      component: Icons
    }
  ]
})
