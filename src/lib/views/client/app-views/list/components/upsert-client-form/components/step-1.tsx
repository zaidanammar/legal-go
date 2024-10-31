import { Button, Flex, Input, message, Row, Spin, Typography } from 'antd';

import { InputItem } from '@/lib/components/data-entry/input-item';
import { SearchableSelect } from '@/lib/components/data-entry/searchable-select';
import { useViewModelContext } from '@/lib/providers/view-model';
import { type SubmitUpsertCaseRequest } from '@/lib/services/api/case-services/upsert/types';
import { type UpsertClientFormViewModel } from '@/lib/views/client/app-views/list/components/upsert-client-form/hooks';

export const UpsertClientFormStep1 = () => {
  const {
    form,
    setCurrentStep,
    submitUpsertCase,
    isLoading,
    clientTypeOptions,
    isLoadingSubmitUpsertCase,
    setSelectedCaseID,
  } = useViewModelContext<UpsertClientFormViewModel>();

  const handleSubmitFormStep1 = async () => {
    await form.validateFields();
    const formValues = form.getFieldsValue();

    const payload: Partial<SubmitUpsertCaseRequest> = {
      client: {
        client_name: formValues.client.client_name,
        email: formValues.client.email,
        address: formValues.client.address,
        client_type: formValues.client.client_type,
        company_name: formValues.client.company_name,
        whatsapp_number: formValues.client.whatsapp_number,
      },
    };

    const data = await submitUpsertCase(payload);
    if (data?.case_id) {
      setSelectedCaseID(data?.case_id);
    }

    setCurrentStep(1);
    message.success('Berhasil menyimpan data');
  };

  return (
    <Spin spinning={isLoading}>
      <Typography.Title level={4} style={{ color: '#7D848C' }}>
        Data Klien
      </Typography.Title>
      <Row gutter={24}>
        <InputItem
          required
          fullWidth
          label="Nama Klien"
          name={['client', 'client_name']}
          wrapperProps={{ span: 24, lg: 12 }}
          rules={[{ required: true }]}
        >
          <Input placeholder="Masukkan Nama Klien" />
        </InputItem>
        <InputItem
          required
          fullWidth
          label="Tipe Klien"
          name={['client', 'client_type']}
          wrapperProps={{ span: 24, lg: 12 }}
          rules={[{ required: true }]}
        >
          <SearchableSelect
            placeholder="Pilih Tipe Klien"
            options={clientTypeOptions}
          />
        </InputItem>
      </Row>

      <Row gutter={24}>
        <InputItem
          required
          fullWidth
          label="Nomor Telepon"
          name={['client', 'whatsapp_number']}
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <Input placeholder="Masukkan Nomor Telepon" />
        </InputItem>
        <InputItem
          required
          fullWidth
          label="Nama Perusahaan"
          name={['client', 'company_name']}
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <Input placeholder="Masukkan Nama Perusahaan" />
        </InputItem>
      </Row>

      <Row gutter={24}>
        <InputItem
          required
          fullWidth
          label="Email"
          name={['client', 'email']}
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <Input placeholder="Masukkan Email" />
        </InputItem>
        <InputItem
          required
          fullWidth
          label="Alamat"
          name={['client', 'address']}
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <Input placeholder="Masukkan Alamat" />
        </InputItem>
      </Row>

      <Flex justify="end" style={{ marginTop: 24 }}>
        <Button
          type="primary"
          onClick={handleSubmitFormStep1}
          loading={isLoadingSubmitUpsertCase}
        >
          Simpan Data
        </Button>
      </Flex>
    </Spin>
  );
};
