/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/logs',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Logs',
  meta: {
    title: 'Logs',
    icon: 'chart'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/example/list'),
      name: 'Logs',
      meta: { title: 'Logs' }
    }
  ]
}

export default chartsRouter
