import { Col, DatePicker, Flex, Row, Space, Spin, Typography } from 'antd';
import dayjs from 'dayjs';

import { PageLayout } from '@/lib/components/layout/page-layout';
import { ResponsiveCol } from '@/lib/components/layout/responsive-col';
import { DATE_FORMAT_YYYY_MM_DD } from '@/lib/constants/date';
import { ViewModelProvider } from '@/lib/providers/view-model';
import { CompletedTransactionChart } from '@/lib/views/dashboard/components/completed-transaction-chart';
import { DashboardBox } from '@/lib/views/dashboard/components/dashboard-box';
import { TargetSellingBarChart } from '@/lib/views/dashboard/components/target-selling-bar-chart';
import { Top5CaseChart } from '@/lib/views/dashboard/components/top-5-case-chart';
import { useDashboardPage } from '@/lib/views/dashboard/hooks';

const DashboardPage = () => {
  const viewModel = useDashboardPage();
  const {
    dashboardData,
    isLoadingDashboardData,
    getSearchParamsValue,
    handleUpdateSearchParams,
  } = viewModel;

  return (
    <ViewModelProvider {...viewModel}>
      <Spin spinning={isLoadingDashboardData}>
        <PageLayout>
          <Space direction="vertical" size="middle">
            <Flex justify="space-between" align="center">
              <Typography.Title style={{ color: '#4C5CA0' }} level={3}>
                Dashboard
              </Typography.Title>
              <ResponsiveCol>
                <DatePicker.RangePicker
                  defaultValue={
                    getSearchParamsValue('start_date') &&
                    getSearchParamsValue('end_date')
                      ? [
                          dayjs(getSearchParamsValue('start_date')),
                          dayjs(getSearchParamsValue('end_date')),
                        ]
                      : undefined
                  }
                  onChange={(e) =>
                    handleUpdateSearchParams({
                      start_date: e
                        ? e[0]?.format(DATE_FORMAT_YYYY_MM_DD)
                        : undefined,
                      end_date: e
                        ? e[1]?.format(DATE_FORMAT_YYYY_MM_DD)
                        : undefined,
                    })
                  }
                />
              </ResponsiveCol>
            </Flex>
            <Row gutter={[16, 16]}>
              <Col span={24} lg={8}>
                <DashboardBox
                  title="Total Transaksi"
                  value={dashboardData?.total_transaction ?? 0}
                />
              </Col>
              <Col span={24} lg={8}>
                <DashboardBox
                  title="Transaksi Tertagih"
                  value={dashboardData?.account_receivables ?? 0}
                />
              </Col>
              <Col span={24} lg={8}>
                <DashboardBox
                  title="Account Receivable"
                  value={dashboardData?.account_receivables ?? 0}
                />
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24} lg={8}>
                <Flex vertical gap={16}>
                  <DashboardBox
                    title="Total Kunjungan"
                    value={
                      dashboardData?.total_order_client.total_customer ?? 0
                    }
                    counterValue={{
                      corporate:
                        dashboardData?.total_order_client.company_customer ?? 0,
                      individual:
                        dashboardData?.total_order_client.individual_customer ??
                        0,
                    }}
                  />
                  <DashboardBox
                    title="Total Klien Memesan"
                    value={
                      dashboardData?.total_order_client.total_customer ?? 0
                    }
                    counterValue={{
                      corporate:
                        dashboardData?.total_order_client.company_customer ?? 0,
                      individual:
                        dashboardData?.total_order_client.individual_customer ??
                        0,
                    }}
                  />
                </Flex>
              </Col>
              <Col span={24} lg={16}>
                <Top5CaseChart />
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={24} lg={12}>
                <TargetSellingBarChart />
              </Col>
              <Col span={24} lg={12}>
                <CompletedTransactionChart />
              </Col>
            </Row>
          </Space>
        </PageLayout>
      </Spin>
    </ViewModelProvider>
  );
};

export default DashboardPage;
