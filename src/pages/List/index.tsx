import { List, Input, Button, Form } from 'antd';
import { useUserList } from '@/resource/List/userList';
import styles from './index.less';
import { UserActionType } from '@/resource/List/userList';
import { useCallback, useState } from 'react';
import { ListOptionModal } from './ListOptionModal';

const UserList: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { users = [], setName, loading, updateUserPolicy } = useUserList();
  const [form] = Form.useForm();
  const [modalAction, setModalAction] = useState<'create' | 'modify'>('create');
  const openModal = (action: 'create' | 'modify', record?: object) => {
    setModalAction(action);
    if (action === 'create') {
      form.resetFields();
    }
    if (action === 'modify') {
      form.setFieldsValue({ ...record });
    }
    setOpen(true);
  };
  const onOK = useCallback(async () => {
    const formData = await form.getFieldsValue();
    if (modalAction === 'create') {
      updateUserPolicy({ key: UserActionType.ADD, body: formData });
    }
  }, [modalAction]);
  return (
    <div className={styles['list-wrapper']}>
      <Input
        style={{ width: '300px' }}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Button
        type="primary"
        onClick={() => {
          openModal('create');
        }}
      >
        添加
      </Button>
      <List
        loading={loading}
        pagination={{ pageSize: 5 }}
        dataSource={users}
        renderItem={(item) => (
          <List.Item
            className={styles['list-item']}
            actions={[
              <Button
                key="modify"
                type="primary"
                onClick={() => {
                  openModal('modify', item);
                }}
              >
                编辑
              </Button>,
              <Button
                onClick={() => {
                  updateUserPolicy({
                    key: UserActionType.DELETE,
                    body: { userId: item.id },
                  });
                }}
                key="delete"
                type="primary"
                danger
              >
                删除
              </Button>,
            ]}
          >
            <div>
              <div>name:{item.name}</div>
              <div>adderss:{item.address}</div>
              <div>date:{item.date}</div>
            </div>
          </List.Item>
        )}
      ></List>
      <ListOptionModal
        open={open}
        form={form}
        closable={false}
        onOk={() => {
          onOK();
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};

export default UserList;
