import dayjs from 'dayjs';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { getAllDefaultLimit } from '@/lib/constants/pagination';
import { useAppForm } from '@/lib/hooks/form/use-app-form';
import { useViewModelContext } from '@/lib/providers/view-model';
import { useGetCaseDetail } from '@/lib/services/api/case-services/get-detail';
import { useSubmitUpsertCase } from '@/lib/services/api/case-services/upsert';
import { useGetClientList } from '@/lib/services/api/client-services/get-list';
import { type UpsertClientFormType } from '@/lib/views/client/app-views/list/components/upsert-client-form/types';
import { type ClientListPageViewModel } from '@/lib/views/client/app-views/list/hooks';

export const useUpsertClientForm = () => {
  const {
    isModalOpen,
    handleCloseModal,
    selectedCaseID,
    setSelectedCaseID,
    masterDataList,
    refreshClientList,
  } = useViewModelContext<ClientListPageViewModel>();

  const { form } = useAppForm<UpsertClientFormType>();
  const [currentStep, setCurrentStep] = useState(0);

  const { response: clientListData, isLoading: isLoadingClientListData } =
    useGetClientList({
      queryParams: {
        limit: getAllDefaultLimit,
        offset: 0,
      },
      isReady: !!isModalOpen,
    });

  const { response: caseDetailData, isLoading: isLoadingCaseDetailData } =
    useGetCaseDetail({
      caseID: selectedCaseID ?? '',
      isReady: !!(isModalOpen && selectedCaseID),
    });

  const { trigger: submitUpsertCase, isMutating: isLoadingSubmitUpsertCase } =
    useSubmitUpsertCase();

  const clientTypeOptions = useMemo(() => {
    return (masterDataList?.client_types ?? []).map((item) => ({
      label: item.value,
      value: item.value,
    }));
  }, [masterDataList?.client_types]);

  const caseCategoryOptions = useMemo(() => {
    return (masterDataList?.case_categories ?? []).map((item) => ({
      label: item.value,
      value: item.value,
    }));
  }, [masterDataList?.case_categories]);

  const caseTypeOptions = useMemo(() => {
    return (masterDataList?.case_types ?? []).map((item) => ({
      label: item.value,
      value: item.value,
    }));
  }, [masterDataList?.case_types]);

  const serviceTypeOptions = useMemo(() => {
    return (masterDataList?.service_types ?? []).map((item) => ({
      label: item.value,
      value: item.value,
    }));
  }, [masterDataList?.service_types]);

  const paymentMethodOptions = useMemo(() => {
    return (masterDataList?.payment_methods ?? []).map((item) => ({
      label: item.value,
      value: item.value,
    }));
  }, [masterDataList?.payment_methods]);

  const picOptions = useMemo(() => {
    return (clientListData?.rows ?? []).map((item) => ({
      label: item.name,
      value: item.id,
    }));
  }, [clientListData]);

  const handleInitiateFormValues = useCallback(() => {
    if (!caseDetailData) return;

    form.setFieldsValue({
      client: {
        client_name: caseDetailData?.user?.name,
        client_type: caseDetailData?.user?.client_type,
        address: caseDetailData?.user?.address,
        company_name: caseDetailData?.user?.company_name,
        email: caseDetailData?.user?.email,
        whatsapp_number: caseDetailData?.user?.whatsapp_number,
      },
      case: {
        case: caseDetailData?.case,
        case_id: caseDetailData?.case_id,
        case_unique_id: caseDetailData?.case_unique_id,
        category: caseDetailData?.category,
        pic_id: caseDetailData?.pic_id,
        started_at: dayjs(caseDetailData?.started_at),
        summary: caseDetailData?.summary,
        type: caseDetailData?.type,
      },
      case_actions: caseDetailData.case_actions.map((item) => ({
        case_id: item.case_id,
        pic_id: item.pic_id,
        scheduled_at: dayjs(item.scheduled_at),
        service_name: item.service_name,
        service_type: item.service_type,
      })),
    });
  }, [caseDetailData, form]);

  useEffect(() => {
    handleInitiateFormValues();
  }, [handleInitiateFormValues]);

  const isLoading = isLoadingCaseDetailData || isLoadingClientListData;

  return {
    form,
    isModalOpen,
    handleCloseModal,
    currentStep,
    setCurrentStep,
    submitUpsertCase,
    isLoading,
    clientTypeOptions,
    caseCategoryOptions,
    caseTypeOptions,
    isLoadingSubmitUpsertCase,
    selectedCaseID,
    setSelectedCaseID,
    picOptions,
    serviceTypeOptions,
    paymentMethodOptions,
    refreshClientList,
    caseDetailData,
  };
};

export type UpsertClientFormViewModel = ReturnType<typeof useUpsertClientForm>;
