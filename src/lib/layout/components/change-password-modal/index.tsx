import { LockOutlined } from '@ant-design/icons';
import { Form, Input, Modal, Row } from 'antd';

import { InputItem } from '@/lib/components/data-entry/input-item';
import { useModal } from '@/lib/providers/modal';

import { useChangeAccountPasswordForm } from './hooks';

const formKey = 'change-password';

export const ChangePasswordModal = () => {
  const { form, handleCloseModal, handleSubmit } =
    useChangeAccountPasswordForm();
  const { isModalOpen } = useModal();

  return (
    <Modal
      centered
      onCancel={handleCloseModal}
      open={isModalOpen}
      title="Ubah Password"
      okText="Simpan"
      okButtonProps={{
        form: formKey,
        htmlType: 'submit',
      }}
    >
      <Form id={formKey} form={form} layout="vertical" onFinish={handleSubmit}>
        <Row gutter={16}>
          <InputItem
            fullWidth
            label="Password Lama"
            name="old_password"
            rules={[{ required: true }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Masukkan password lama"
              autoComplete="new-password"
            />
          </InputItem>

          <InputItem
            fullWidth
            label="Password Baru"
            name="new_password"
            rules={[{ required: true }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Masukkan password baru"
              autoComplete="new-password"
            />
          </InputItem>
        </Row>
      </Form>
    </Modal>
  );
};
