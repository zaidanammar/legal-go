import { Button, Flex, Row, Typography } from 'antd';

import { useViewModelContext } from '@/lib/providers/view-model';
import { type UpsertClientFormViewModel } from '@/lib/views/client/app-views/list/components/upsert-client-form/hooks';

export const UpsertClientFormStep7 = () => {
  const { form, setCurrentStep, setFormValues } =
    useViewModelContext<UpsertClientFormViewModel>();

  const handleSubmitFormStep7 = async () => {
    await form.validateFields();
    const values = form.getFieldsValue();

    setFormValues((prevState) => ({ ...prevState, ...values }));
    setCurrentStep(7);
  };

  return (
    <>
      <Typography.Title level={4} style={{ color: '#7D848C' }}>
        Signature
      </Typography.Title>
      <Row gutter={24}></Row>

      <Flex justify="end" style={{ marginTop: 24 }}>
        <Button onClick={handleSubmitFormStep7} type="primary">
          Simpan Data
        </Button>
      </Flex>
    </>
  );
};
