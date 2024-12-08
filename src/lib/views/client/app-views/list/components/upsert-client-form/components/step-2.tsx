import {
  Button,
  DatePicker,
  Flex,
  Input,
  message,
  Row,
  Spin,
  Typography,
} from 'antd';

import { InputItem } from '@/lib/components/data-entry/input-item';
import { SearchableSelect } from '@/lib/components/data-entry/searchable-select';
import { useViewModelContext } from '@/lib/providers/view-model';
import { type SubmitUpsertCaseRequest } from '@/lib/services/api/case-services/upsert/types';
import { type UpsertClientFormViewModel } from '@/lib/views/client/app-views/list/components/upsert-client-form/hooks';

export const UpsertClientFormStep2 = () => {
  const {
    form,
    setCurrentStep,
    caseCategoryOptions,
    caseTypeOptions,
    isLoading,
    submitUpsertCase,
    isLoadingSubmitUpsertCase,
    selectedCaseID,
    picOptions,
  } = useViewModelContext<UpsertClientFormViewModel>();

  const handleSubmitFormStep2 = async () => {
    await form.validateFields();
    const formValues = form.getFieldsValue();

    const payload: Partial<SubmitUpsertCaseRequest> = {
      case: {
        case_id: selectedCaseID ?? '',
        case: formValues.case.case,
        case_unique_id: formValues.case.case_unique_id,
        category: formValues.case.category,
        pic_id: formValues.case.pic_id,
        started_at: formValues.case.started_at,
        type: formValues.case.type,
        summary: formValues.case.summary,
      },
    };

    await submitUpsertCase(payload);
    setCurrentStep(2);
    message.success('Berhasil menyimpan data');
  };

  return (
    <Spin spinning={isLoading}>
      <Typography.Title level={4} style={{ color: '#7D848C' }}>
        Data Kasus
      </Typography.Title>
      <Row gutter={24}>
        <InputItem
          form={form}
          required
          fullWidth
          label="ID Kasus"
          name={['case', 'case_unique_id']}
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <Input placeholder="Masukkan ID Kasus" />
        </InputItem>
        <InputItem
          form={form}
          required
          fullWidth
          label="Kategori Kasus"
          name={['case', 'category']}
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <SearchableSelect
            placeholder="Pilih Kategori Kasus"
            options={caseCategoryOptions}
          />
        </InputItem>
      </Row>
      <Row gutter={24}>
        <InputItem
          form={form}
          required
          fullWidth
          label="Nama Kasus"
          name={['case', 'case']}
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <Input placeholder="Masukkan Nama Kasus" />
        </InputItem>
        <InputItem
          form={form}
          required
          fullWidth
          label="Tipe Kasus"
          name={['case', 'type']}
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <SearchableSelect
            placeholder="Pilih Tipe Kasus"
            options={caseTypeOptions}
          />
        </InputItem>
      </Row>
      <Row gutter={24}>
        <InputItem
          form={form}
          required
          fullWidth
          label="Tanggal Masuk"
          name={['case', 'started_at']}
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <DatePicker placeholder="Pilih Tanggal Masuk" />
        </InputItem>
        <InputItem
          form={form}
          required
          fullWidth
          label="PIC"
          name={['case', 'pic_id']}
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <SearchableSelect placeholder="Pilih PIC" options={picOptions} />
        </InputItem>
      </Row>

      <Flex justify="end" style={{ marginTop: 24 }}>
        <Button
          type="primary"
          onClick={handleSubmitFormStep2}
          loading={isLoadingSubmitUpsertCase}
        >
          Simpan Data
        </Button>
      </Flex>
    </Spin>
  );
};
