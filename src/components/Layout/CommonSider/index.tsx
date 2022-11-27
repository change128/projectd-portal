import React from 'react';
import { Layout, Menu } from 'antd';
import { useLocation, useNavigate } from '@umijs/max';

type IMenuItem = {
  label: string;
  key: string;
  path: string;
};

export const CommonSider: React.FC<{ menuList: IMenuItem[] }> = ({
  menuList = [],
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const activeRoute = menuList.find((m) => m.path === pathname)?.key;

  return (
    <Layout.Sider theme="light">
      <Menu
        items={menuList}
        selectedKeys={[activeRoute || '']}
        onClick={(e) => {
          const target = menuList.find((m) => m.key === e.key)?.path || '';
          navigate(target);
        }}
      />
    </Layout.Sider>
  );
};
