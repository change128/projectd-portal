import { request } from '@umijs/max';

export const queryUserList = async (params: {
  userId?: number;
  name?: string;
}) => {
  return request('/api/userList', { params });
};

export const deleteUser = async (params: { userId?: number }) => {
  return request('/api/user', {
    method: 'DELETE',
    data: { userId: params.userId },
  });
};

export const addUser = async (params?: {
  name?: string;
  adderss?: string;
  date?: string;
}) => {
  return request('/api/user', {
    method: 'POST',
    data: { ...params },
  });
};
