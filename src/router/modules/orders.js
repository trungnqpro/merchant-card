/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/orders',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Orders',
  meta: {
    title: 'Orders',
    icon: 'chart'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/example/list'),
      name: 'Order List',
      meta: { title: 'Order List' }
    },
    {
      path: 'transactions',
      component: () => import('@/views/example/list'),
      name: 'Transaction List',
      meta: { title: 'Transaction List' }
    }
  ]
}

export default chartsRouter
