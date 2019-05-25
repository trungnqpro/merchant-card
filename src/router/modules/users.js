/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const usersRouter = {
  path: '/users',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Users',
  meta: {
    title: 'Users',
    icon: 'user'
  },
  children: [
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
      path: 'create',
      component: () => import('@/views/example/create'),
      name: 'CreateArticle',
      meta: { title: 'Create Article', icon: 'edit' }
    },
    {
      path: 'edit/:id(\\d+)',
      component: () => import('@/views/example/edit'),
      name: 'EditArticle',
      meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
      hidden: true
    },
    {
      path: 'list',
      component: () => import('@/views/example/list'),
      name: 'ArticleList',
      meta: { title: 'Article List', icon: 'list' }
    }
  ]
}

export default usersRouter
