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
      path: 'export-excel',
      component: () => import('@/views/excel/export-excel'),
      name: 'ExportExcel',
      meta: { title: 'Export Excel' }
    },
    {
      path: 'upload-excel',
      component: () => import('@/views/excel/upload-excel'),
      name: 'UploadExcel',
      meta: { title: 'Upload Excel' }
    }
  ]
}

export default chartsRouter
