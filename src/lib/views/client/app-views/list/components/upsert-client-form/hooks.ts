import { Form } from 'antd';
import dayjs from 'dayjs';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { useViewModelContext } from '@/lib/providers/view-model';
import { useGetCaseDetail } from '@/lib/services/api/case-services/get-detail';
import { useSubmitUpsertCase } from '@/lib/services/api/case-services/upsert';
import { useGetMasterDataList } from '@/lib/services/api/master-services/get-all';
import { type UpsertClientFormType } from '@/lib/views/client/app-views/list/components/upsert-client-form/types';
import { type ClientListPageViewModel } from '@/lib/views/client/app-views/list/hooks';

export const useUpsertClientForm = () => {
  const { isModalOpen, handleCloseModal, selectedCaseID, setSelectedCaseID } =
    useViewModelContext<ClientListPageViewModel>();

  const [form] = Form.useForm<UpsertClientFormType>();
  const [currentStep, setCurrentStep] = useState(0);

  const { response: caseDetailData, isLoading: isLoadingCaseDetailData } =
    useGetCaseDetail({
      caseID: selectedCaseID ?? '',
      isReady: !!(isModalOpen && selectedCaseID),
    });

  const { response: masterDataList, isLoading: isLoadingGetMasterDataList } =
    useGetMasterDataList();

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
    });
  }, [caseDetailData, form]);

  useEffect(() => {
    handleInitiateFormValues();
  }, [handleInitiateFormValues]);

  const isLoading = isLoadingCaseDetailData || isLoadingGetMasterDataList;

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
  };
};

export type UpsertClientFormViewModel = ReturnType<typeof useUpsertClientForm>;
