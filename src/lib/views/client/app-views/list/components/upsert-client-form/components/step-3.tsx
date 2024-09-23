import { Button, Flex, Input, Row, Typography } from 'antd';

import { InputItem } from '@/lib/components/data-entry/input-item';
import { useViewModelContext } from '@/lib/providers/view-model';
import { type UpsertClientFormViewModel } from '@/lib/views/client/app-views/list/components/upsert-client-form/hooks';

export const UpsertClientFormStep3 = () => {
  const { form, setCurrentStep, setFormValues } =
    useViewModelContext<UpsertClientFormViewModel>();

  const handleSubmitFormStep3 = async () => {
    await form.validateFields();
    const values = form.getFieldsValue();

    setFormValues((prevState) => ({ ...prevState, ...values }));
    setCurrentStep(3);
  };

  return (
    <>
      <Typography.Title level={4} style={{ color: '#7D848C' }}>
        Summary Kasus
      </Typography.Title>
      <Row gutter={24}>
        <InputItem fullWidth name="summary" rules={[{ required: true }]}>
          <Input.TextArea rows={17} placeholder="Masukkan Summary Kasus" />
        </InputItem>
      </Row>

      <Flex justify="end" style={{ marginTop: 24 }}>
        <Button onClick={handleSubmitFormStep3} type="primary">
          Simpan Data
        </Button>
      </Flex>
    </>
  );
};
