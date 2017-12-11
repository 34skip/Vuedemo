import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/home'
import master from '@/components/master'
import my from '@/components/my'
import homelist from '@/components/homelist'
import canvastime from '@/components/canvastime'
import canvasquan from '@/components/canvasquan'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/home',
          name: 'home',
          component: home,
          children: [
            {
              path: '/homelist',
              name: 'homelist',
              component: homelist
            }
          ]
        },
        {
          path: '/master',
          name: 'master',
          component: master
        },
        {
          path: '/my',
          name: 'my',
          component: my
        }
      ]
    },
    {
      path: '/canvastime',
      name: 'canvastime',
      component: canvastime
    },
    {
      path: '/canvasquan',
      name: 'canvasquan',
      component: canvasquan
    },
  ]
})
