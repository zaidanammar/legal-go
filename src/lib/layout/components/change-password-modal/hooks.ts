import { Form, notification } from 'antd';

import { useModal } from '@/lib/providers/modal';
import { useChangeUserAccountPassword } from '@/lib/services/api/user-services/account/change-password';
import { type ChangeUserAccountPasswordRequest } from '@/lib/services/api/user-services/account/change-password/types';

export const useChangeAccountPasswordForm = () => {
  const [form] = Form.useForm<ChangeUserAccountPasswordRequest>();
  const { handleClose } = useModal();

  const { trigger: submitPasswordUpdate, isMutating } =
    useChangeUserAccountPassword();

  const handleCloseModal = () => {
    handleClose();
    form.resetFields();
  };

  const handleSubmit = async (values: ChangeUserAccountPasswordRequest) => {
    await submitPasswordUpdate(values);
    notification.success({ message: 'Berhasil mengubah password' });
    handleCloseModal();
  };

  return {
    form,
    handleCloseModal,
    isMutating,
    handleSubmit,
  };
};
