import { DeleteFilled, PlusCircleOutlined } from '@ant-design/icons';
import { Button, Col, Flex, Form, Input, Row, Typography } from 'antd';

import { InputItem } from '@/lib/components/data-entry/input-item';
import { useViewModelContext } from '@/lib/providers/view-model';
import { type SubmitUpsertCaseRequest } from '@/lib/services/api/case-services/upsert/types';
import { type UpsertClientFormViewModel } from '@/lib/views/client/app-views/list/components/upsert-client-form/hooks';

export const UpsertClientFormStep7 = () => {
  const {
    form,
    setCurrentStep,
    submitUpsertCase,
    selectedCaseID,
    caseDetailData,
    isLoadingSubmitUpsertCase,
  } = useViewModelContext<UpsertClientFormViewModel>();

  const handleSubmitFormStep7 = async () => {
    await form.validateFields();
    const formValues = form.getFieldsValue();

    const payload: Partial<SubmitUpsertCaseRequest> = {
      signatures: formValues.signatures.map((item, index) => ({
        ...item,
        ...(caseDetailData?.signatures?.[index]?.id
          ? {
              case_action_id: caseDetailData.signatures[index].id,
            }
          : {}),
      })),
      case: {
        case_id: selectedCaseID ?? '',
      },
    };

    await submitUpsertCase(payload);

    setCurrentStep(7);
  };

  return (
    <>
      <Typography.Title level={4} style={{ color: '#7D848C' }}>
        Signature
      </Typography.Title>
      <Row>
        <Form.List name="signatures">
          {(fields, { add, remove }) => {
            const handleAdd = () => {
              const newRow = {
                name: '',
                role: '',
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
                      label="Nama"
                      name={[field.name, 'name']}
                      wrapperProps={{ span: 24, lg: 10 }}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input placeholder="Masukkan Nama" />
                    </InputItem>
                    <InputItem
                      fullWidth
                      label="Role"
                      name={[field.name, 'role']}
                      wrapperProps={{ span: 24, lg: 10 }}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input placeholder="Masukkan Role" />
                    </InputItem>
                    <Col span={24} lg={4}>
                      <Button
                        style={{ marginTop: 4 }}
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
                    Tambah Signature
                  </Button>
                </Col>
              </div>
            );
          }}
        </Form.List>
      </Row>

      <Flex justify="end" style={{ marginTop: 24 }}>
        <Button
          type="primary"
          onClick={handleSubmitFormStep7}
          loading={isLoadingSubmitUpsertCase}
        >
          Simpan Data
        </Button>
      </Flex>
    </>
  );
};
