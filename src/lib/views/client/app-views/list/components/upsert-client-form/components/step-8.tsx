import { DeleteFilled, PlusCircleOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  message,
  Row,
  Typography,
} from 'antd';
import { useMemo } from 'react';

import { FormatNumeric } from '@/lib/components/data-display/format-numeric';
import { InputItem } from '@/lib/components/data-entry/input-item';
import { NumericFormatInput } from '@/lib/components/data-entry/numeric-format-input';
import { SearchableSelect } from '@/lib/components/data-entry/searchable-select';
import { useViewModelContext } from '@/lib/providers/view-model';
import { type SubmitUpsertCaseRequest } from '@/lib/services/api/case-services/upsert/types';
import { type UpsertClientFormViewModel } from '@/lib/views/client/app-views/list/components/upsert-client-form/hooks';

export const UpsertClientFormStep8 = () => {
  const {
    form,
    serviceTypeOptions,
    paymentMethodOptions,
    submitUpsertCase,
    selectedCaseID,
    handleCloseModal,
    refreshClientList,
    isLoadingSubmitUpsertCase,
  } = useViewModelContext<UpsertClientFormViewModel>();

  const discount = Form.useWatch(['payment', 'discount'], form) ?? 0;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fee = Form.useWatch(['payment', 'sub_payments'], form) ?? [];

  const subtotal = useMemo(() => {
    return fee ? fee.reduce((a, b) => a + b.price, 0) : 0;
  }, [fee]);

  const total = useMemo(() => {
    return subtotal - discount;
  }, [discount, subtotal]);

  const handleSubmitFormStep8 = async () => {
    await form.validateFields();
    const formValues = form.getFieldsValue();

    const payload: Partial<SubmitUpsertCaseRequest> = {
      payment: {
        case_id: selectedCaseID ?? '',
        ...formValues.payment,
      },
    };
    await submitUpsertCase(payload);
    handleCloseModal();
    refreshClientList();
    message.success('Berhasil menyimpan data');
  };

  return (
    <>
      <Typography.Title level={4} style={{ color: '#7D848C' }}>
        Invoice
      </Typography.Title>
      <Row gutter={24}>
        <InputItem
          form={form}
          fullWidth
          required
          name={['payment', 'payment_term']}
          label="Termin"
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, md: 12 }}
        >
          <Input placeholder="Masukkan Jasa Hukum" />
        </InputItem>
        <InputItem
          form={form}
          fullWidth
          required
          name={['payment', 'payment_method_id']}
          label="Pembayaran"
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, md: 12 }}
        >
          <SearchableSelect
            placeholder="Pilih Metode Pembayaran"
            options={paymentMethodOptions}
          />
        </InputItem>
      </Row>
      <Row>
        <Form.List name={['payment', 'sub_payments']}>
          {(fields, { add, remove }) => {
            const handleAdd = () => {
              const newRow = {
                service_name: '',
                service_type: '',
                price: 0,
                delivery_date: '',
              };
              add(newRow);
            };

            const removeRow = (index: number) => {
              remove(index);
            };

            return (
              <div
                style={{
                  width: '100%',
                }}
              >
                {fields.map((field) => (
                  <Row key={field.key} gutter={16} align="middle">
                    <InputItem
                      fullWidth
                      label="Jasa Hukum"
                      name={[field.name, 'service_name']}
                      wrapperProps={{ span: 24, lg: 6 }}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input placeholder="Masukkan Jasa Hukum" />
                    </InputItem>
                    <InputItem
                      fullWidth
                      label="Tipe Jasa"
                      name={[field.name, 'service_type']}
                      wrapperProps={{ span: 24, lg: 6 }}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <SearchableSelect
                        placeholder="Pilih Tipe Jasa"
                        options={serviceTypeOptions}
                      />
                    </InputItem>
                    <InputItem
                      fullWidth
                      label="Biaya"
                      name={[field.name, 'price']}
                      wrapperProps={{ span: 24, lg: 6 }}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <NumericFormatInput placeholder="Masukkan Biaya" />
                    </InputItem>
                    <InputItem
                      fullWidth
                      label="Delivery"
                      name={[field.name, 'delivery_date']}
                      wrapperProps={{ span: 24, lg: 4 }}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <DatePicker placeholder="Pilih Tanggal" />
                    </InputItem>
                    <Col span={24} lg={2}>
                      <Button
                        style={{ marginTop: 28 }}
                        onClick={() => removeRow(field.name)}
                        type="primary"
                        size="small"
                        icon={<DeleteFilled />}
                      />
                    </Col>
                  </Row>
                ))}
                <Col style={{ marginTop: 16 }}>
                  <Button
                    block
                    type="primary"
                    onClick={handleAdd}
                    icon={<PlusCircleOutlined />}
                  >
                    Tambah Tagihan
                  </Button>
                </Col>
              </div>
            );
          }}
        </Form.List>
      </Row>

      <Row gutter={24} style={{ marginTop: 16 }}>
        <InputItem
          form={form}
          required
          fullWidth
          label="Subtotal"
          rules={[{ required: true }]}
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <NumericFormatInput
            placeholder="Masukkan subtotal"
            disabled
            value={subtotal}
          />
        </InputItem>
        <InputItem
          form={form}
          fullWidth
          name={['payment', 'discount']}
          label="Potongan"
          wrapperProps={{ span: 24, lg: 12 }}
        >
          <NumericFormatInput placeholder="Masukkan Potongan" />
        </InputItem>
      </Row>
      <Flex justify="space-between" align="center" style={{ marginTop: 16 }}>
        <Col>
          <Typography.Text>Total</Typography.Text>
          <Typography.Title
            level={2}
            style={{
              color: '#4C5CA0',
              fontWeight: 'bold',
            }}
          >
            <FormatNumeric value={total || 0} />
          </Typography.Title>
        </Col>

        <InputItem
          form={form}
          fullWidth
          wrapperProps={{ span: 24, lg: 8 }}
          name={['payment', 'is_send_email']}
          valuePropName="checked"
        >
          <Checkbox>Kirim Invoice ke Email Klien</Checkbox>
        </InputItem>
      </Flex>

      <Flex justify="end" style={{ marginTop: 24 }}>
        <Button
          type="primary"
          onClick={handleSubmitFormStep8}
          loading={isLoadingSubmitUpsertCase}
        >
          Finish
        </Button>
      </Flex>
    </>
  );
};
