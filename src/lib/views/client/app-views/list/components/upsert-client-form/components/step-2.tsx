import { Button, DatePicker, Flex, Input, Row, Typography } from 'antd';

import { InputItem } from '@/lib/components/data-entry/input-item';
import { SearchableSelect } from '@/lib/components/data-entry/searchable-select';
import { useViewModelContext } from '@/lib/providers/view-model';
import { type UpsertClientFormViewModel } from '@/lib/views/client/app-views/list/components/upsert-client-form/hooks';

export const UpsertClientFormStep2 = () => {
  const { form, setCurrentStep, setFormValues } =
    useViewModelContext<UpsertClientFormViewModel>();

  const handleSubmitFormStep2 = async () => {
    await form.validateFields();
    const values = form.getFieldsValue();

    setFormValues((prevState) => ({ ...prevState, ...values }));
    setCurrentStep(2);
  };

  return (
    <>
      <Typography.Title level={4} style={{ color: '#7D848C' }}>
        Data Kasus
      </Typography.Title>
      <Row gutter={24}>
        <InputItem
          required
          name="case_id"
          label="ID Kasus"
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <Input placeholder="Masukkan ID Kasus" />
        </InputItem>
        <InputItem
          required
          name="case_category"
          label="Kategori Kasus"
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <SearchableSelect
            placeholder="Pilih Kategori Kasus"
            options={[
              {
                label: 'Kategori 1',
                value: 'Kategori 1',
              },
              {
                label: 'Kategori 2',
                value: 'Kategori 2',
              },
            ]}
          />
        </InputItem>
        <InputItem
          required
          name="case_name"
          label="Nama Kasus"
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <Input placeholder="Masukkan Nama Kasus" />
        </InputItem>
        <InputItem
          required
          name="case_type"
          label="Tipe Kasus"
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <SearchableSelect
            placeholder="Pilih Tipe Kasus"
            options={[
              { label: 'Tipe 1', value: 'Tipe 1' },
              { label: 'Tipe 2', value: 'Tipe 2' },
            ]}
          />
        </InputItem>
        <InputItem
          required
          name="date_of_case"
          label="Tanggal Masuk"
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <DatePicker placeholder="Pilih Tanggal Masuk" />
        </InputItem>
        <InputItem
          required
          label="PIC"
          name="pic_of_case"
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <SearchableSelect
            placeholder="Pilih PIC"
            options={[
              {
                label: 'PIC 1',
                value: 'PIC 1',
              },
              {
                label: 'PIC 2',
                value: 'PIC 2',
              },
            ]}
          />
        </InputItem>
      </Row>

      <Flex justify="end" style={{ marginTop: 24 }}>
        <Button onClick={handleSubmitFormStep2} type="primary">
          Simpan Data
        </Button>
      </Flex>
    </>
  );
};
