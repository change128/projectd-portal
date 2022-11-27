import React from 'react';
import { Layout } from 'antd';
import styles from './index.less';
import { useNavigate } from '@umijs/max';

export const CommonHeader: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout.Header className={styles['header-wrapper']}>
      <div className={styles['header-content']}>
        <div
          className={styles['logo']}
          onClick={() => {
            navigate('/dashboard');
          }}
        >
          logo
        </div>
        <div className={styles['avatar']}>头像</div>
      </div>
    </Layout.Header>
  );
};
