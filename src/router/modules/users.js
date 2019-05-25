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
      path: 'list',
      component: () => import('@/views/example/list'),
      name: 'User List',
      meta: { title: 'User List', icon: 'list' }
    },
    {
      path: 'create',
      component: () => import('@/views/example/create'),
      name: 'Create User',
      meta: { title: 'Create User', icon: 'edit' }
    },
    {
      path: 'edit/:id(\\d+)',
      component: () => import('@/views/example/edit'),
      name: 'Edit Users',
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
    }
  ]
}

export default usersRouter
