import React from 'react';
import { Outlet } from '@umijs/max';
import { Layout } from 'antd';
import { CommonSider } from '@/components/Layout';
import styles from './index.less';

const Home: React.FC = () => {
  const menuList = [
    { label: '栅格布局', key: 'grid', path: '/grid' },
    { label: '列表布局', key: 'list', path: '/list' },
    { label: '表格布局', key: 'table', path: '/table' },
    { label: '表单', key: 'form', path: '/form' },
  ];
  return (
    <Layout>
      <CommonSider menuList={menuList} />
      <Layout.Content className={styles['main-content']}>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default Home;
