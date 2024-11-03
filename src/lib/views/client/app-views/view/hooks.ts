import { message } from 'antd';
import { useCallback, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useAppForm } from '@/lib/hooks/form/use-app-form';
import { useGetClientDetail } from '@/lib/services/api/client-services/get-detail';
import { useSubmitUpdateClient } from '@/lib/services/api/client-services/update';
import { type SubmitUpdateClientRequest } from '@/lib/services/api/client-services/update/types';
import { useGetMasterDataList } from '@/lib/services/api/master-services/get-all';

export const useClientDetailPage = () => {
  const { id: clientID } = useParams();
  const { form } = useAppForm<SubmitUpdateClientRequest>();

  const { response: masterDataList, isLoading: isLoadingGetMasterData } =
    useGetMasterDataList();

  const {
    response: clientDetailData,
    isLoading: isLoadingClientDetailData,
    mutate: refreshClientDetailData,
  } = useGetClientDetail({
    clientID: clientID ?? '',
    isReady: !!clientID,
  });

  const {
    trigger: submitUpdateClient,
    isMutating: isLoadingSubmitUpdateClient,
  } = useSubmitUpdateClient({
    clientID: clientID ?? '',
  });

  const handleInitializeForm = useCallback(() => {
    if (!clientDetailData) return;

    form.setFieldsValue({
      name: clientDetailData.name,
      whatsapp_number: clientDetailData.whatsapp_number,
      email: clientDetailData.email,
      client_type: clientDetailData.client_type,
      company_name: clientDetailData.company_name,
      address: clientDetailData.address,
    });
  }, [clientDetailData, form]);

  useEffect(() => {
    handleInitializeForm();
  }, [handleInitializeForm]);

  const handleSubmitUpdateClient = async (
    formValues: SubmitUpdateClientRequest
  ) => {
    await submitUpdateClient(formValues);
    message.success('Berhasil mengubah data client');
    refreshClientDetailData();
  };

  const clientTypeOptions = useMemo(() => {
    return (masterDataList?.client_types ?? []).map((item) => ({
      label: item.value,
      value: item.value,
    }));
  }, [masterDataList?.client_types]);

  const isLoading = isLoadingGetMasterData || isLoadingClientDetailData;

  return {
    form,
    isLoading,
    clientTypeOptions,
    handleSubmitUpdateClient,
    isLoadingSubmitUpdateClient,
  };
};
