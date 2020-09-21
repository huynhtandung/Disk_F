// isProtected: các route cần được bảo vệ
// Có thể thêm giá trị vào đây
export default [
  {
    title: 'Login Page | Sample App',
    component: 'Login',
    path: '/login',
    isProtected: false
  },
  {
    title: 'Dashboard | Sample App',
    component: 'Dashboard',
    path: '/dashboard',
    isProtected: true
  },
  {
    title: 'Setting | Sample App',
    component: 'Setting',
    path: '/setting',
    isProtected: true
  },
  {
    title: 'Functions',
    component: 'Functions',
    path: '/functions',
    isProtected: true,
  },
  {
    title: 'Functions',
    component: 'FunctionFoo',
    path: '/functions/foo',
    isProtected: true
  }
]