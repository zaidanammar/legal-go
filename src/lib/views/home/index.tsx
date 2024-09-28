import { Col, DatePicker, Flex, Row, Space, Typography } from 'antd';

import { InputItem } from '@/lib/components/data-entry/input-item';
import { PageLayout } from '@/lib/components/layout/page-layout';
import { CompletedTransactionChart } from '@/lib/views/home/components/completed-transaction-chart';
import { DashboardBox } from '@/lib/views/home/components/dashboard-box';
import { TargetSellingBarChart } from '@/lib/views/home/components/target-selling-bar-chart';
import { Top5CaseChart } from '@/lib/views/home/components/top-5-case-chart';

const HomePage = () => {
  return (
    <PageLayout>
      <Space direction="vertical" size="middle">
        <Flex justify="space-between" align="center">
          <Typography.Title style={{ color: '#4C5CA0' }} level={3}>
            Dashboard
          </Typography.Title>
          <InputItem>
            <DatePicker.RangePicker />
          </InputItem>
        </Flex>
        <Row gutter={[16, 16]}>
          <Col span={24} lg={8}>
            <DashboardBox title="Total Transaksi" value="Rp 1.000.000" />
          </Col>
          <Col span={24} lg={8}>
            <DashboardBox title="Transaksi Tertagih" value="Rp 1.000.000" />
          </Col>
          <Col span={24} lg={8}>
            <DashboardBox title="Account Receivable" value="Rp 1.000.000" />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24} lg={8}>
            <Flex vertical gap={16}>
              <DashboardBox
                title="Total Kunjungan"
                value="2.890"
                counterValue={{
                  corporate: 700,
                  individual: 210,
                }}
              />
              <DashboardBox
                title="Total Kunjungan"
                value="2.890"
                counterValue={{
                  corporate: 700,
                  individual: 210,
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
  );
};

export default HomePage;
