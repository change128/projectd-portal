export default [
  {
    path: '',
    component: '@/layouts/Home',
    routes: [
      { name: '欢迎页', path: 'dashboard', component: '@/pages/Dashboard' },
      { name: '栅格布局', path: 'grid', component: '@/pages/Grid' },
      { name: '列表布局', path: 'list', component: '@/pages/List' },
      { name: '表格布局', path: 'table', component: '@/pages/Table' },
      { name: '表单', path: 'form', component: '@/pages/Form' },
    ],
  },
];
