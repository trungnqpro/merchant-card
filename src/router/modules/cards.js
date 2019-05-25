/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/cards',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Cards',
  meta: {
    title: 'Cards',
    icon: 'chart'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/excel/export-excel'),
      name: 'List cards',
      meta: { title: 'List cards' }
    },
    {
      path: 'imports',
      component: () => import('@/views/excel/upload-excel'),
      name: 'Import Cards',
      meta: { title: 'Import Cards' }
    },
    {
      path: 'revenues-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: 'Revenues Chart',
      meta: { title: 'Revenues', noCache: true }
    }
  ]
}

export default chartsRouter
