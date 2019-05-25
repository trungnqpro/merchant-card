/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/systems',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Systems',
  meta: {
    title: 'System',
    icon: 'chart'
  },
  children: [
    {
      path: 'imports',
      component: () => import('@/views/excel/upload-excel'),
      name: 'Import Cards',
      meta: { title: 'Import Cards' }
    },
    {
      path: 'revenues-export',
      component: () => import('@/views/excel/export-excel'),
      name: 'Export Revenues',
      meta: { title: 'Export Revenues' }
    },
    {
      path: 'revenues-overview',
      component: () => import('@/views/charts/mix-chart'),
      name: 'Revenues Chart',
      meta: { title: 'Revenues', noCache: true }
    }
  ]
}

export default chartsRouter
