import { Button, Flex, Input, message, Row, Spin, Typography } from 'antd';

import { InputItem } from '@/lib/components/data-entry/input-item';
import { useViewModelContext } from '@/lib/providers/view-model';
import { type SubmitUpsertCaseRequest } from '@/lib/services/api/case-services/upsert/types';
import { type UpsertClientFormViewModel } from '@/lib/views/client/app-views/list/components/upsert-client-form/hooks';

export const UpsertClientFormStep3 = () => {
  const {
    form,
    isLoading,
    setCurrentStep,
    submitUpsertCase,
    isLoadingSubmitUpsertCase,
    selectedCaseID,
  } = useViewModelContext<UpsertClientFormViewModel>();

  const handleSubmitFormStep3 = async () => {
    await form.validateFields();
    const formValues = form.getFieldsValue();

    const payload: Partial<SubmitUpsertCaseRequest> = {
      case: {
        case_id: selectedCaseID ?? '',
        summary: formValues.case.summary,
      },
    };

    await submitUpsertCase(payload);
    setCurrentStep(3);
    message.success('Berhasil menyimpan data');
  };

  return (
    <Spin spinning={isLoading}>
      <Typography.Title level={4} style={{ color: '#7D848C' }}>
        Summary Kasus
      </Typography.Title>
      <Row gutter={24}>
        <InputItem
          form={form}
          fullWidth
          name={['case', 'summary']}
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={17} placeholder="Masukkan Summary Kasus" />
        </InputItem>
      </Row>

      <Flex justify="end" style={{ marginTop: 24 }}>
        <Button
          type="primary"
          onClick={handleSubmitFormStep3}
          loading={isLoadingSubmitUpsertCase}
        >
          Simpan Data
        </Button>
      </Flex>
    </Spin>
  );
};
