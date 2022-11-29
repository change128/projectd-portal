import { message } from 'antd';
import { useState, useEffect, useCallback } from 'react';
import api from '@/services/newApi';

export enum UserActionType {
  ADD = 'ADD',
  DELETE = 'DELETE',
  UPDATE = 'UPDATE',
}
export type AddRequest = {
  key: UserActionType.ADD;
  body: object;
};
export type DeleteRequest = {
  key: UserActionType.DELETE;
  body: object;
};
export type UpdateRequest = {
  key: UserActionType.UPDATE;
  body: object;
};

export const useUserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<number>();
  const [name, setName] = useState<string>('');

  const fetchUserList = useCallback(async () => {
    setLoading(true);
    console.log(name);

    api.UserController.queryUserList({ userId, name })
      .then((res) => {
        setUsers(res.data.userList);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId, name]);
  const updateUserPolicy = useCallback(
    async (args: AddRequest | DeleteRequest | UpdateRequest) => {
      setLoading(true);
      switch (args.key) {
        case UserActionType.DELETE:
          await api.UserController.deleteUser(args.body);
          break;
        case UserActionType.ADD:
          await api.UserController.addUser(args.body);
          break;
        case UserActionType.UPDATE:
          await api.UserController.editUserInfo(args.body);
          break;
      }
      message.success('操作成功');
      fetchUserList();
    },
    [name],
  );
  useEffect(() => {
    fetchUserList();
  }, [fetchUserList]);

  return {
    fetchUserList,
    users,
    loading,
    setUserId,
    setName,
    updateUserPolicy,
  };
};
