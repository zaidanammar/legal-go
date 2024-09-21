import { LoadingOutlined } from '@ant-design/icons';
import { Card, Spin } from 'antd';
import { createStyles } from 'antd-style';

import { PageLayout } from '@/lib/components/layout/page-layout';

const useStyles = createStyles({
  card: {
    minHeight: '70vh',
  },
});

export const PageSkeleton = () => {
  const { styles } = useStyles();

  return (
    <PageLayout
      breadCrumbItems={[
        { title: <LoadingOutlined /> },
        { title: 'Mohon Tunggu...' },
      ]}
    >
      <Spin tip="Mohon tunggu...">
        <Card className={styles.card} />
      </Spin>
    </PageLayout>
  );
};
