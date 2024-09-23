import { Button, Flex, Input, Row, Typography } from 'antd';

import { InputItem } from '@/lib/components/data-entry/input-item';
import { SearchableSelect } from '@/lib/components/data-entry/searchable-select';
import { useViewModelContext } from '@/lib/providers/view-model';
import { type UpsertClientFormViewModel } from '@/lib/views/client/app-views/list/components/upsert-client-form/hooks';

export const UpsertClientFormStep1 = () => {
  const { form, setCurrentStep, setFormValues } =
    useViewModelContext<UpsertClientFormViewModel>();

  const handleSubmitFormStep1 = async () => {
    await form.validateFields();
    const values = form.getFieldsValue();

    setFormValues((prevState) => ({ ...prevState, ...values }));
    setCurrentStep(1);
  };

  return (
    <>
      <Typography.Title level={4} style={{ color: '#7D848C' }}>
        Data Klien
      </Typography.Title>
      <Row gutter={24}>
        <InputItem
          required
          label="Nama Klien"
          name="client_name"
          wrapperProps={{ span: 24, lg: 12 }}
          rules={[{ required: true }]}
        >
          <Input placeholder="Masukkan Nama Klien" />
        </InputItem>
        <InputItem
          required
          label="Tipe Klien"
          name="client_type"
          wrapperProps={{ span: 24, lg: 12 }}
          rules={[{ required: true }]}
        >
          <SearchableSelect
            placeholder="Pilih Tipe Klien"
            options={[
              {
                label: 'Perorangan',
                value: 'Perorangan',
              },
              {
                label: 'Perusahaan',
                value: 'Perusahaan',
              },
            ]}
          />
        </InputItem>
        <InputItem
          required
          label="Nomor Telepon"
          name="client_phone_number"
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <Input placeholder="Masukkan Nomor Telepon" />
        </InputItem>
        <InputItem
          required
          label="Nama Perusahaan"
          name="client_company_name"
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <Input placeholder="Masukkan Nama Perusahaan" />
        </InputItem>
        <InputItem
          required
          label="Email"
          name="client_email"
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <Input placeholder="Masukkan Email" />
        </InputItem>
        <InputItem
          required
          label="Alamat"
          name="client_address"
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <Input placeholder="Masukkan Alamat" />
        </InputItem>
      </Row>

      <Flex justify="end" style={{ marginTop: 24 }}>
        <Button type="primary" onClick={handleSubmitFormStep1}>
          Simpan Data
        </Button>
      </Flex>
    </>
  );
};
