import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useQueryParams } from '@/lib/hooks/use-query-params';
import { useSubmitLogin } from '@/lib/services/api/user-services/authentication/login';
import { type SubmitLoginRequest } from '@/lib/services/api/user-services/authentication/login/types';
import { useAuth } from '@/lib/stores/auth';

export const useRegisterPage = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const { getSearchParamsValue } = useQueryParams();
  const [form] = Form.useForm();

  const { trigger: submitLogin, isMutating } = useSubmitLogin();

  const handleRegister = async (data: SubmitLoginRequest) => {
    const response = await submitLogin(data);
    setToken(response?.token || '');
    setTimeout(() => {
      navigate(getSearchParamsValue('redirectTo') ?? '/');
    }, 10);
  };

  return {
    form,
    isMutating,
    handleRegister,
  };
};
