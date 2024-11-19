import { DeleteFilled, PlusCircleOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  message,
  Row,
  Typography,
} from 'antd';

import { InputItem } from '@/lib/components/data-entry/input-item';
import { SearchableSelect } from '@/lib/components/data-entry/searchable-select';
import { useViewModelContext } from '@/lib/providers/view-model';
import { type SubmitUpsertCaseRequest } from '@/lib/services/api/case-services/upsert/types';
import { type UpsertClientFormViewModel } from '@/lib/views/client/app-views/list/components/upsert-client-form/hooks';

export const UpsertClientFormStep4 = () => {
  const {
    form,
    setCurrentStep,
    picOptions,
    selectedCaseID,
    submitUpsertCase,
    serviceTypeOptions,
    caseDetailData,
  } = useViewModelContext<UpsertClientFormViewModel>();

  const handleSubmitFormStep4 = async () => {
    await form.validateFields();
    const formValues = form.getFieldsValue();

    const payload: Partial<SubmitUpsertCaseRequest> = {
      case_actions: formValues.case_actions.map((item, index) => ({
        ...item,
        ...(caseDetailData?.case_actions?.[index]?.case_action_id
          ? {
              case_action_id: caseDetailData.case_actions[index].case_action_id,
            }
          : {}),
        case_id: selectedCaseID ?? '',
      })),
      case: {
        case_id: selectedCaseID ?? '',
      },
    };

    await submitUpsertCase(payload);
    setCurrentStep(4);
    message.success('Berhasil menyimpan data');
  };

  return (
    <>
      <Typography.Title level={4} style={{ color: '#7D848C' }}>
        Strategi & Formasi
      </Typography.Title>
      <Row>
        <Form.List name="case_actions">
          {(fields, { add, remove }) => {
            const handleAdd = () => {
              const newRow = {
                service_name: '',
                service_type: '',
                pic_id: '',
                scheduled_at: '',
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
                      label="PIC"
                      name={[field.name, 'pic_id']}
                      wrapperProps={{ span: 24, lg: 6 }}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <SearchableSelect
                        placeholder="Pilih PIC"
                        options={picOptions}
                      />
                    </InputItem>
                    <InputItem
                      fullWidth
                      label="Schedule"
                      name={[field.name, 'scheduled_at']}
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
