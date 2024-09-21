import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useQueryParams } from '@/lib/hooks/use-query-params';
import { useSubmitLogin } from '@/lib/services/api/user-services/authentication/login';
import { useAuth } from '@/lib/stores/auth';

export const useLoginPage = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const { getSearchParamsValue } = useQueryParams();
  const [form] = Form.useForm();

  const { isMutating } = useSubmitLogin();

  const handleLogin = async () => {
    // const response = await submitLogin(data);
    // setToken(response?.token || '');
    setToken('fake-token');
    setTimeout(() => {
      navigate(getSearchParamsValue('redirectTo') ?? '/');
    }, 10);
  };

  return {
    form,
    isMutating,
    handleLogin,
  };
};
