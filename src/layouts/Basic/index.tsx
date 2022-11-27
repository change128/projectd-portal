import React from 'react';
import { CommonHeader } from '@/components/Layout';
import { Layout } from 'antd';
import { Outlet } from '@umijs/max';
import styles from './index.less';
const Basic = () => {
  return (
    <Layout className={styles['global-layout']}>
      <CommonHeader />
      <Outlet />
    </Layout>
  );
};

export default Basic;
