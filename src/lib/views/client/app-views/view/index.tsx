import { Card, Form, Input, Row, Spin } from 'antd';

import { InputItem } from '@/lib/components/data-entry/input-item';
import { SearchableSelect } from '@/lib/components/data-entry/searchable-select';
import { SubmitCTASection } from '@/lib/components/data-entry/submit-button';
import { PageLayout } from '@/lib/components/layout/page-layout';
import { clientMenu } from '@/lib/constants/menu-config';
import { clientMenuLabel } from '@/lib/constants/menu-label';
import { clientPath } from '@/lib/constants/routes';
import {
  emailValidation,
  nameValidation,
  phoneNumberValidation,
} from '@/lib/constants/validations';
import { HistoryCaseTableSection } from '@/lib/views/client/app-views/view/components/history-case-table-section';
import { useClientDetailPage } from '@/lib/views/client/app-views/view/hooks';

const ClientDetailPage = () => {
  const {
    form,
    clientTypeOptions,
    isLoading,
    handleSubmitUpdateClient,
    isLoadingSubmitUpdateClient,
  } = useClientDetailPage();

  return (
    <PageLayout
      pageTitle={clientMenuLabel}
      breadCrumbItems={[
        { title: clientMenu.icon },
        {
          title: clientMenuLabel,
          path: clientPath,
        },
        {
          title: 'Detail',
        },
      ]}
    >
      <Spin spinning={isLoading}>
        <Card>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmitUpdateClient}
          >
            <Row gutter={24}>
              <InputItem
                form={form}
                fullWidth
                wrapperProps={{
                  md: 8,
                  span: 24,
                }}
                label="Nama"
                name="name"
                rules={nameValidation({ isRequired: true })}
              >
                <Input placeholder="Masukkan nama" />
              </InputItem>
              <InputItem
                form={form}
                fullWidth
                wrapperProps={{
                  md: 8,
                  span: 24,
                }}
                name="whatsapp_number"
                label="Nomor WhatsApp"
                rules={phoneNumberValidation({ isRequired: true })}
              >
                <Input placeholder="Contoh: 08xxxxxxxxxx" />
              </InputItem>
              <InputItem
                form={form}
                fullWidth
                wrapperProps={{
                  md: 8,
                  span: 24,
                }}
                label="Email"
                name="email"
                rules={emailValidation({ isRequired: true })}
              >
                <Input placeholder="Masukkan email" />
              </InputItem>
            </Row>
            <Row gutter={24}>
              <InputItem
                form={form}
                fullWidth
                name="client_type"
                label="Tipe Pengguna"
                rules={[
                  {
                    required: true,
                  },
                ]}
                wrapperProps={{
                  md: 8,
                  span: 24,
                }}
              >
                <SearchableSelect
                  size="small"
                  placeholder="Pilih Tipe Pengguna"
                  options={clientTypeOptions}
                />
              </InputItem>
              <InputItem
                form={form}
                fullWidth
                label="Nama Perusahaan"
                name="company_name"
                rules={[{ required: true }]}
                wrapperProps={{
                  md: 8,
                  span: 24,
                }}
              >
                <Input placeholder="Masukkan Nama Perusahaan" />
              </InputItem>
              <InputItem
                form={form}
                required
                fullWidth
                label="Alamat"
                name="address"
                rules={[{ required: true }]}
                wrapperProps={{
                  md: 8,
                  span: 24,
                }}
              >
                <Input placeholder="Masukkan Alamat" />
              </InputItem>
            </Row>
            <SubmitCTASection
              saveButtonProps={{
                loading: isLoadingSubmitUpdateClient,
              }}
            />
          </Form>
        </Card>
        <HistoryCaseTableSection />
      </Spin>
    </PageLayout>
  );
};

export default ClientDetailPage;
