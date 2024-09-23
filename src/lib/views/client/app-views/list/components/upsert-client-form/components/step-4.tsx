import { DeleteFilled, PlusCircleOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  Row,
  Typography,
} from 'antd';

import { InputItem } from '@/lib/components/data-entry/input-item';
import { SearchableSelect } from '@/lib/components/data-entry/searchable-select';
import { useViewModelContext } from '@/lib/providers/view-model';
import { type UpsertClientFormViewModel } from '@/lib/views/client/app-views/list/components/upsert-client-form/hooks';

export const UpsertClientFormStep4 = () => {
  const { form, setCurrentStep, setFormValues } =
    useViewModelContext<UpsertClientFormViewModel>();

  const handleSubmitFormStep4 = async () => {
    await form.validateFields();
    const values = form.getFieldsValue();

    setFormValues((prevState) => ({ ...prevState, ...values }));
    setCurrentStep(4);
  };

  return (
    <>
      <Typography.Title level={4} style={{ color: '#7D848C' }}>
        Strategi & Formasi
      </Typography.Title>
      <Row>
        <Form.List name="formation">
          {(fields, { add, remove }) => {
            const handleAdd = () => {
              const newRow = {
                legal_services: '',
                legal_services_type: '',
                legal_services_pic: '',
                legal_services_schedule: '',
              };
              add(newRow);
            };

            const removeRow = (index: number) => {
              remove(index);
            };

            return (
              <div>
                {fields.map((field) => (
                  <Row key={field.key} gutter={16} align="middle">
                    <InputItem
                      label="Jasa Hukum"
                      name={[field.name, 'legal_services']}
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
                      label="Tipe Jasa"
                      name={[field.name, 'legal_services_type']}
                      wrapperProps={{ span: 24, lg: 6 }}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <SearchableSelect
                        placeholder="Pilih Tipe Jasa"
                        options={[
                          {
                            label: 'Tipe 1',
                            value: 'Tipe 1',
                          },
                          {
                            label: 'Tipe 2',
                            value: 'Tipe 2',
                          },
                        ]}
                      />
                    </InputItem>
                    <InputItem
                      label="PIC"
                      name={[field.name, 'legal_services_pic']}
                      wrapperProps={{ span: 24, lg: 6 }}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
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
                    <InputItem
                      label="Schedule"
                      name={[field.name, 'legal_services_schedule']}
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
                    Tambah Strategi
                  </Button>
                </Col>
              </div>
            );
          }}
        </Form.List>
      </Row>

      <Flex justify="end" style={{ marginTop: 24 }}>
        <Button onClick={handleSubmitFormStep4} type="primary">
          Simpan Data
        </Button>
      </Flex>
    </>
  );
};
