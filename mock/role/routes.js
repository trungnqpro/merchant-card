// Just a mock data

export const constantRoutes = [
  {
    path: '/redirect',
    component: 'layout/Layout',
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: 'views/redirect/index'
      }
    ]
  },
  {
    path: '/login',
    component: 'views/login/index',
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: 'views/login/auth-redirect',
    hidden: true
  },
  {
    path: '/404',
    component: 'views/error-page/404',
    hidden: true
  },
  {
    path: '/401',
    component: 'views/error-page/401',
    hidden: true
  },
  {
    path: '',
    component: 'layout/Layout',
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: 'views/dashboard/index',
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/permission',
    component: 'layout/Layout',
    redirect: '/permission/index',
    alwaysShow: true,
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: 'page',
        component: 'views/permission/page',
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin']
        }
      },
      {
        path: 'directive',
        component: 'views/permission/directive',
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
        }
      },
      {
        path: 'role',
        component: 'views/permission/role',
        name: 'RolePermission',
        meta: {
          title: 'Role Permission',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/cards',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    name: 'Cards',
    meta: {
      title: 'Cards',
      icon: 'chart',
      roles: ['admin']
    },
    children: [
      {
        path: 'list',
        component: 'views/excel/export-excel',
        name: 'List cards',
        meta: { title: 'List cards' }
      },
      {
        path: 'imports',
        component: 'views/excel/upload-excel',
        name: 'Import Cards',
        meta: { title: 'Import Cards' }
      },
      {
        path: 'revenues-chart',
        component: 'views/charts/mix-chart',
        name: 'Revenues Chart',
        meta: { title: 'Revenues', noCache: true }
      }
    ]
  },
  {
    path: '/logs',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    name: 'Logs',
    meta: {
      title: 'Logs',
      icon: 'chart',
      roles: ['admin']
    },
    children: [
      {
        path: 'list',
        component: 'views/example/list',
        name: 'Logs',
        meta: { title: 'Logs' }
      }
    ]
  },
  {
    path: '/merchants',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    name: 'Merchants',
    meta: {
      title: 'Merchants',
      icon: 'chart'
    },
    children: [
      {
        path: 'list',
        component: 'views/example/list',
        name: 'Merchant List',
        meta: { title: 'Merchant List' }
      },
      {
        path: 'create',
        component: 'views/example/create',
        name: 'Create Merchant',
        meta: { title: 'Create Merchant' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: 'views/example/edit',
        name: 'Edit Merchant',
        meta: { title: 'Edit User', noCache: true, activeMenu: '/example/list' },
        hidden: true
      },
      {
        path: '/profile',
        component: 'layout/Layout',
        redirect: '/profile/index',
        hidden: true,
        children: [
          {
            path: 'index',
            component: 'views/profile/index',
            name: 'Profile',
            meta: { title: 'Profile', icon: 'user', noCache: true }
          }
        ]
      },
      {
        path: 'revenues',
        component: 'views/charts/mix-chart',
        name: 'Revenues',
        meta: { title: 'My Revenues', noCache: true }
      }
    ]
  },
  {
    path: '/orders',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    name: 'Orders',
    meta: {
      title: 'Orders',
      icon: 'chart'
    },
    children: [
      {
        path: 'list',
        component: 'views/example/list',
        name: 'Order List',
        meta: { title: 'Order List' }
      },
      {
        path: 'transactions',
        component: 'views/example/list',
        name: 'Transaction List',
        meta: { title: 'Transaction List' }
      }
    ]
  },
  {
    path: '/pos',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    name: 'Pos',
    meta: {
      title: 'Pos Card',
      icon: 'chart'
    },
    children: [
      {
        path: 'list',
        component: 'views/example/list',
        name: 'Pos',
        meta: { title: 'Pos List' }
      },
      {
        path: 'pos-chart',
        component: 'views/charts/mix-chart',
        name: 'Pos chart',
        meta: { title: 'Pos Chart', noCache: true }
      }
    ]
  },
  {
    path: '/error',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: 'views/error-page/401',
        name: 'Page401',
        meta: { title: 'Page 401', noCache: true }
      },
      {
        path: '404',
        component: 'views/error-page/404',
        name: 'Page404',
        meta: { title: 'Page 404', noCache: true }
      }
    ]
  },

  {
    path: '/error-log',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    children: [
      {
        path: 'log',
        component: 'views/error-log/index',
        name: 'ErrorLog',
        meta: { title: 'Error Log', icon: 'bug' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
