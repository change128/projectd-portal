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
  address?: string;
  date?: string;
}) => {
  return request('/api/user', {
    method: 'POST',
    data: { ...params },
  });
};
export const editUserInfo = async (params?: {
  id?: number;
  name?: string;
  address?: string;
  date?: string;
}) => {
  return request('/api/user', {
    method: 'PUT',
    params: { id: params?.id },
    data: { name: params?.name, address: params?.address, date: params?.date },
  });
};
