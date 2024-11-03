import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { DATE_FORMAT_YYYY_MM_DD } from '@/lib/constants/date';
import { loginPath } from '@/lib/constants/routes';
import { useAppForm } from '@/lib/hooks/form/use-app-form';
import { useGetMasterDataList } from '@/lib/services/api/master-services/get-all';
import { useSubmitSignup } from '@/lib/services/api/user-services/authentication/sign-up';
import { type SubmitSignupRequest } from '@/lib/services/api/user-services/authentication/sign-up/types';
import { dateFormatter } from '@/lib/utils/date/date-formatter';

export const useRegisterPage = () => {
  const navigate = useNavigate();
  const { form } = useAppForm<SubmitSignupRequest>();

  const { response: masterDataList, isLoading: isLoadingGetMasterData } =
    useGetMasterDataList();

  const { trigger: submitLogin, isMutating } = useSubmitSignup();

  const handleRegister = async (data: SubmitSignupRequest) => {
    const payload = {
      ...data,
      birth_date: dateFormatter({
        date: data.birth_date,
        format: DATE_FORMAT_YYYY_MM_DD,
        fallback: '',
      }),
    };
    await submitLogin(payload);
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

  const clientTypeOptions = useMemo(() => {
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
    clientTypeOptions,
  };
};
