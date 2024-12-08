import { Button, Flex, message, Row, Typography } from 'antd';

import { RichTextEditor } from '@/lib/components/data-entry/rich-text-editor';
import { useViewModelContext } from '@/lib/providers/view-model';
import { type SubmitUpsertCaseRequest } from '@/lib/services/api/case-services/upsert/types';
import { type UpsertClientFormViewModel } from '@/lib/views/client/app-views/list/components/upsert-client-form/hooks';

export const UpsertClientFormStep6 = () => {
  const {
    form,
    setCurrentStep,
    submitUpsertCase,
    caseDetailData,
    selectedCaseID,
    isLoadingSubmitUpsertCase,
  } = useViewModelContext<UpsertClientFormViewModel>();

  const handleSubmitFormStep6 = async () => {
    await form.validateFields();
    const formValues = form.getFieldsValue();

    const payload: Partial<SubmitUpsertCaseRequest> = {
      invoice: formValues.invoice,
      case: {
        case_id: selectedCaseID ?? '',
      },
    };

    await submitUpsertCase(payload);
    message.success('Berhasil menyimpan data');
    setCurrentStep(6);
  };

  return (
    <>
      <Typography.Title level={4} style={{ color: '#7D848C' }}>
        Proposal
      </Typography.Title>
      <Row gutter={24}>
        <RichTextEditor
          form={form}
          name="invoice"
          defaultValue={caseDetailData?.invoice}
        />
      </Row>

      <Flex justify="end" style={{ marginTop: 24 }}>
        <Button
          type="primary"
          onClick={handleSubmitFormStep6}
          loading={isLoadingSubmitUpsertCase}
        >
          Simpan Data
        </Button>
      </Flex>
    </>
  );
};
