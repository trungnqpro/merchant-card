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
      name: 'Orders',
      meta: { title: 'Order List' }
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
