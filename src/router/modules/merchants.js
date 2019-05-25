/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/merchants',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Merchants',
  meta: {
    title: 'Merchants',
    icon: 'chart'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/example/list'),
      name: 'Merchant List',
      meta: { title: 'Merchant List' }
    },
    {
      path: 'create',
      component: () => import('@/views/example/create'),
      name: 'Create Merchant',
      meta: { title: 'Create Merchant' }
    },
    {
      path: 'edit/:id(\\d+)',
      component: () => import('@/views/example/edit'),
      name: 'Edit Merchant',
      meta: { title: 'Edit User', noCache: true, activeMenu: '/example/list' },
      hidden: true
    },
    {
      path: '/profile',
      component: Layout,
      redirect: '/profile/index',
      hidden: true,
      children: [
        {
          path: 'index',
          component: () => import('@/views/profile/index'),
          name: 'Profile',
          meta: { title: 'Profile', icon: 'user', noCache: true }
        }
      ]
    },
    {
      path: 'revenues',
      component: () => import('@/views/charts/mix-chart'),
      name: 'Revenues',
      meta: { title: 'My Revenues', noCache: true }
    }
  ]
}

export default chartsRouter
