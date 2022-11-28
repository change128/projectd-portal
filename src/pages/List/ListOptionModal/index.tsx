import React from 'react';
import { Modal, Form, Input, FormInstance, ModalProps } from 'antd';

interface IModalProps extends ModalProps {
  form: FormInstance;
}

export const ListOptionModal: React.FC<IModalProps> = ({
  form,
  ...modalProps
}) => {
  return (
    <Modal {...modalProps}>
      <Form form={form}>
        <Form.Item label="姓名" name="name">
          <Input></Input>
        </Form.Item>
        <Form.Item label="地址" name="address">
          <Input></Input>
        </Form.Item>
      </Form>
    </Modal>
  );
};
