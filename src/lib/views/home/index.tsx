import { Button, Card, Row, Space } from 'antd';

import { SummaryCard } from '@/lib/components/data-display/summary-card';
import { DatePickertab } from '@/lib/components/data-entry/date-picker-tab';
import { PageLayout } from '@/lib/components/layout/page-layout';
import { ResponsiveCol } from '@/lib/components/layout/responsive-col';

import { useHomePage } from './hooks';

const Home = () => {
  const { detailItems, summaryItems, confirmSucces, confirmRejected } =
    useHomePage();
  return (
    <PageLayout>
      <Space direction="vertical" size="large">
        <DatePickertab />

        <Card>
          <Row gutter={16}>
            <ResponsiveCol lg={12} xl={12}>
              <SummaryCard
                title="Summary Card Example"
                detailItems={detailItems}
                summaryItems={summaryItems}
              />
            </ResponsiveCol>
            <ResponsiveCol lg={12} xl={12}>
              <SummaryCard
                title="Summary Card Example"
                detailItems={detailItems}
                summaryItems={summaryItems}
              />
            </ResponsiveCol>
            <Button
              onClick={confirmSucces}
              style={{
                backgroundColor: '#08B744',
                color: 'white',
                margin: 10,
              }}
            >
              Open Positive Confirmation Modal
            </Button>
            <Button
              style={{
                backgroundColor: '#ff4d4f',
                color: 'white',
                margin: 10,
              }}
              onClick={confirmRejected}
            >
              Open Rejected Confirmation Modal
            </Button>
          </Row>
        </Card>
      </Space>
    </PageLayout>
  );
};

export default Home;
