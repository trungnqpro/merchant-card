/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/pos',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Pos',
  meta: {
    title: 'Pos Card',
    icon: 'chart'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/example/list'),
      name: 'Pos',
      meta: { title: 'Pos List' }
    },
    {
      path: 'pos-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: 'Pos chart',
      meta: { title: 'Pos Chart', noCache: true }
    }
  ]
}

export default chartsRouter
