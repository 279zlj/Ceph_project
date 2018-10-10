import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import Resources from  '@/components/Resources'
import Allocation from '@/components/Allocation'
import Management from '@/components/Management'
import Rleft from '@/components/Rleft'
import Rindex from '@/components/Rindex'
import Aindex from '@/components/Aindex'
import Aright from '@/components/Aright'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom:index

      }
    },
    {
      path:'/index',
      name:'index',
      menuShow:true,
      component:index
    },
    {
      path:'/Resources',
      name:'Resources',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Rindex,
        right:Rleft,
      },
    },
    {
      path:'/Allocation',
      name:'Allocation',
      menuShow:true,
      components: {
        default:HelloWorld,
        bottom: Aindex,
        right:Aright,
      }
    },
    {
      path:'/Management',
      name:'Management',
      menuShow:true,
      components: {
        default:HelloWorld,

      }
    },
    {
      path:'/Rleft',
      name:'Rleft',
      menuShow:true,
      component:Rleft
    },
    {
      path:'/Rindex',
      name:'Rindex',
      menuShow:true,
      component:Rindex
    },
    {
      path:'/Aindex',
      name:'Aindex',
      menuShow:true,
      component:Aindex
    },
    {
      path:'/Aright',
      name:'Aright',
      menuShow:true,
      component:Aright
    }
  ]
})
