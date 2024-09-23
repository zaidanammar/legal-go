import { Form } from 'antd';
import { useState } from 'react';

import { useViewModelContext } from '@/lib/providers/view-model';
import { type UpsertClientFormType } from '@/lib/views/client/app-views/list/components/upsert-client-form/types';
import { type ClientListPageViewModel } from '@/lib/views/client/app-views/list/hooks';

export const useUpsertClientForm = () => {
  const { isModalOpen, handleClose } =
    useViewModelContext<ClientListPageViewModel>();

  const [form] = Form.useForm<UpsertClientFormType>();
  const [formValues, setFormValues] = useState({});
  const [currentStep, setCurrentStep] = useState(7);

  //   const watch = Form.useWatch([], form);

  //   console.log({ formValues });
  //   console.log({ watch });
  return {
    form,
    isModalOpen,
    handleClose,
    currentStep,
    setCurrentStep,
    formValues,
    setFormValues,
  };
};

export type UpsertClientFormViewModel = ReturnType<typeof useUpsertClientForm>;
