import { Form } from 'antd';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { loginPath } from '@/lib/constants/routes';
import { useGetMasterDataList } from '@/lib/services/api/master-services/get-all';
import { useSubmitSignup } from '@/lib/services/api/user-services/authentication/sign-up';
import { type SubmitSignupRequest } from '@/lib/services/api/user-services/authentication/sign-up/types';

export const useRegisterPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const { response: masterDataList, isLoading: isLoadingGetMasterData } =
    useGetMasterDataList();

  const { trigger: submitLogin, isMutating } = useSubmitSignup();

  const handleRegister = async (data: SubmitSignupRequest) => {
    await submitLogin(data);
    setTimeout(() => {
      navigate(loginPath);
    }, 10);
  };

  const leadChannelOptions = useMemo(() => {
    return (masterDataList?.lead_channels ?? []).map((item) => ({
      label: item.value,
      value: item.value,
    }));
  }, [masterDataList?.lead_channels]);

  const clietTypeOptions = useMemo(() => {
    return (masterDataList?.client_types ?? []).map((item) => ({
      label: item.value,
      value: item.value,
    }));
  }, [masterDataList?.client_types]);

  return {
    form,
    isMutating,
    handleRegister,
    isLoadingGetMasterData,
    leadChannelOptions,
    clietTypeOptions,
  };
};
