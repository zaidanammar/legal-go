import { CheckCircleFilled, CloseOutlined } from '@ant-design/icons';
import { Col, Flex, Form, Modal, Row, Typography } from 'antd';

import { useBreakpointValue } from '@/lib/hooks/use-breakpoint-value';
import { ViewModelProvider } from '@/lib/providers/view-model';
import { CASE_FORM_STEPS } from '@/lib/views/client/app-views/list/components/upsert-client-form/constants';
import { useUpsertClientForm } from '@/lib/views/client/app-views/list/components/upsert-client-form/hooks';

import './index.css';

export const UpsertClientForm = () => {
  const { isMobile } = useBreakpointValue();
  const viewModel = useUpsertClientForm();
  const { currentStep, form, handleCloseModal, isModalOpen, setCurrentStep } =
    viewModel;

  return (
    <ViewModelProvider {...viewModel}>
      <Modal
        onCancel={handleCloseModal}
        open={isModalOpen}
        closeIcon={null}
        width={isMobile ? '100vw' : '70vw'}
        okText="Simpan Data"
        className="custom-modal"
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            signatures: [
              {
                name: '',
                role: '',
              },
            ],
            case_actions: [
              {
                service_name: '',
                service_type: '',
                pic_id: '',
                scheduled_at: '',
              },
            ],
            payment: {
              sub_payments: [
                {
                  service_name: '',
                  service_type: '',
                  price: 0,
                  delivery_date: '',
                },
              ],
            },
          }}
        >
          <Flex
            justify="space-between"
            align="center"
            style={{
              background: '#2E2F7C',
              borderTopRightRadius: 16,
              borderTopLeftRadius: 16,
              padding: '16px 24px',
            }}
          >
            <Typography.Title
              level={3}
              style={{
                color: 'white',
              }}
            >
              Leads Form
            </Typography.Title>

            <CloseOutlined
              onClick={handleCloseModal}
              style={{
                color: '#FFF',
              }}
            />
          </Flex>
          <Row>
            <Col
              span={6}
              style={{
                paddingBottom: 50,
              }}
            >
              <Typography.Title
                level={4}
                style={{ margin: 0, color: '#7D848C', padding: 16 }}
              >
                Informasi Kasus
              </Typography.Title>

              {CASE_FORM_STEPS.map((step, index) => (
                <Col
                  key={step.title}
                  style={{
                    background:
                      currentStep === index ? '#F1F2FC' : 'transparent',
                    padding: 16,
                  }}
                  onClick={
                    index < currentStep
                      ? () => setCurrentStep(index)
                      : () => undefined
                  }
                >
                  <Flex justify="space-between">
                    <Flex gap={16} align="center">
                      <div
                        style={{
                          border: `1px solid ${currentStep === index ? '#5666B0' : '#CACDDE'}`,
                          borderRadius: '999px',
                          width: '20px',
                          height: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: currentStep === index ? '#5666B0' : '#CACDDE',
                        }}
                      >
                        {index + 1}
                      </div>
                      <Typography.Text
                        strong
                        style={{
                          color: currentStep === index ? '#5666B0' : '#7D848C',
                        }}
                      >
                        {step.title}
                      </Typography.Text>
                    </Flex>

                    <CheckCircleFilled
                      style={{
                        color: index <= currentStep ? '#63A154' : '#CACDDE',
                      }}
                    />
                  </Flex>
                </Col>
              ))}
            </Col>

            <Col
              span={18}
              style={{
                borderTopRightRadius: 16,
                borderBottomRightRadius: 16,
                background: '#F7F8FC',
                padding: 16,
              }}
            >
              {CASE_FORM_STEPS[currentStep].content}
            </Col>
          </Row>
        </Form>
      </Modal>
    </ViewModelProvider>
  );
};
