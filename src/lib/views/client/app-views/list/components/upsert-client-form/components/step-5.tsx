import { Button, Flex, Row, Typography } from 'antd';

import { UploadInput } from '@/lib/components/data-entry/upload-input';
import { useViewModelContext } from '@/lib/providers/view-model';
import { type UpsertClientFormViewModel } from '@/lib/views/client/app-views/list/components/upsert-client-form/hooks';

export const UpsertClientFormStep5 = () => {
  const { form, setCurrentStep, setFormValues } =
    useViewModelContext<UpsertClientFormViewModel>();

  const handleSubmitFormStep5 = async () => {
    await form.validateFields();
    const values = form.getFieldsValue();

    setFormValues((prevState) => ({ ...prevState, ...values }));
    setCurrentStep(5);
  };

  return (
    <>
      <Typography.Title level={4} style={{ color: '#7D848C' }}>
        Lampiran
      </Typography.Title>
      <Row gutter={24}>
        <UploadInput />
      </Row>

      <Flex justify="end" style={{ marginTop: 24 }}>
        <Button onClick={handleSubmitFormStep5} type="primary">
          Simpan Data
        </Button>
      </Flex>
    </>
  );
};
