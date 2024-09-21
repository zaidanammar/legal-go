import { Space } from 'antd';

import { DatePickertab } from '@/lib/components/data-entry/date-picker-tab';
import { PageLayout } from '@/lib/components/layout/page-layout';

const Home = () => {
  return (
    <PageLayout>
      <Space direction="vertical" size="large">
        <DatePickertab />
      </Space>
    </PageLayout>
  );
};

export default Home;
