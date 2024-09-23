import { CheckCircleFilled, CloseOutlined } from '@ant-design/icons';
import { Col, Flex, Form, Modal, Row, Typography } from 'antd';

import { useBreakpointValue } from '@/lib/hooks/use-breakpoint-value';
import { ViewModelProvider } from '@/lib/providers/view-model';
import { UpsertClientFormStep1 } from '@/lib/views/client/app-views/list/components/upsert-client-form/components/step-1';
import { UpsertClientFormStep2 } from '@/lib/views/client/app-views/list/components/upsert-client-form/components/step-2';
import { UpsertClientFormStep3 } from '@/lib/views/client/app-views/list/components/upsert-client-form/components/step-3';
import { UpsertClientFormStep4 } from '@/lib/views/client/app-views/list/components/upsert-client-form/components/step-4';
import { UpsertClientFormStep5 } from '@/lib/views/client/app-views/list/components/upsert-client-form/components/step-5';
import { UpsertClientFormStep6 } from '@/lib/views/client/app-views/list/components/upsert-client-form/components/step-6';
import { UpsertClientFormStep7 } from '@/lib/views/client/app-views/list/components/upsert-client-form/components/step-7';
import { UpsertClientFormStep8 } from '@/lib/views/client/app-views/list/components/upsert-client-form/components/step-8';
import { useUpsertClientForm } from '@/lib/views/client/app-views/list/components/upsert-client-form/hooks';

import './index.css';

const formSteps = [
  {
    title: 'Data Klien',
    content: <UpsertClientFormStep1 />,
  },
  {
    title: 'Data Kasus',
    content: <UpsertClientFormStep2 />,
  },
  {
    title: 'Summary Kasus',
    content: <UpsertClientFormStep3 />,
  },
  {
    title: 'Strategi & Formasi',
    content: <UpsertClientFormStep4 />,
  },
  {
    title: 'Lampiran',
    content: <UpsertClientFormStep5 />,
  },
  {
    title: 'Proposal',
    content: <UpsertClientFormStep6 />,
  },
  {
    title: 'Signature',
    content: <UpsertClientFormStep7 />,
  },
  {
    title: 'Invoice',
    content: <UpsertClientFormStep8 />,
  },
];

export const UpsertClientForm = () => {
  const { isMobile } = useBreakpointValue();
  const viewModel = useUpsertClientForm();
  const { currentStep, form, handleClose, isModalOpen, setCurrentStep } =
    viewModel;

  return (
    <ViewModelProvider {...viewModel}>
      <Modal
        onCancel={handleClose}
        open={isModalOpen}
        closeIcon={null}
        width={isMobile ? '100vw' : '70vw'}
        okText="Simpan Data"
        className="custom-modal"
        footer={null}
      >
        <Form form={form} layout="vertical">
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
              onClick={handleClose}
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

              {formSteps.map((step, index) => (
                <Col
                  key={step.title}
                  style={{
                    background:
                      currentStep === index ? '#F1F2FC' : 'transparent',
                    padding: 16,
                  }}
                  //   TODO: temporary disable onClick
                  //   onClick={
                  //     index < currentStep
                  //       ? () => setCurrentStep(index)
                  //       : () => undefined
                  //   }
                  onClick={() => setCurrentStep(index)}
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
              {formSteps[currentStep].content}
            </Col>
          </Row>
        </Form>
      </Modal>
    </ViewModelProvider>
  );
};
