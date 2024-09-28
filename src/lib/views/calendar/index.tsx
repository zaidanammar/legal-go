import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import {
  Button,
  Calendar,
  Card,
  Col,
  Flex,
  Form,
  Select,
  Space,
  Typography,
} from 'antd';
import { createStyles } from 'antd-style';
import dayjs from 'dayjs';

import { PageLayout } from '@/lib/components/layout/page-layout';
import { DATE_FORMAT_MMM_YYYY } from '@/lib/constants/date';
import { useBreakpointValue } from '@/lib/hooks/use-breakpoint-value';

const useStyles = createStyles({
  calendarHeaderContainer: {
    marginBottom: 24,
  },
  monthChangeButtonIcon: {
    color: 'black',
  },
  rangeUnitSelector: {
    minWidth: 180,
    justifySelf: 'end',
  },
});

const CalendarPage = () => {
  const { styles } = useStyles();
  const { isMobile } = useBreakpointValue();

  return (
    <PageLayout>
      <Space direction="vertical" size="large">
        <Card>
          <Calendar
            style={{
              background: 'transparent',
            }}
            headerRender={({ value, onChange: calendarOnChange }) => (
              <Flex
                justify="space-between"
                className={styles.calendarHeaderContainer}
              >
                <Col>
                  <Flex gap={24} align="center">
                    <Button
                      ghost
                      onClick={() => calendarOnChange(value.add(-1, 'month'))}
                    >
                      <ArrowLeftOutlined
                        className={styles.monthChangeButtonIcon}
                      />
                    </Button>
                    <Typography.Title level={4} style={{ marginTop: 16 }}>
                      {dayjs(value).format(DATE_FORMAT_MMM_YYYY)}
                    </Typography.Title>
                    <Button
                      ghost
                      onClick={() => calendarOnChange(value.add(1, 'month'))}
                    >
                      <ArrowRightOutlined
                        className={styles.monthChangeButtonIcon}
                      />
                    </Button>
                  </Flex>
                </Col>

                <Form layout="horizontal">
                  <Form.Item label={isMobile ? '' : 'Range'}>
                    <Select
                      className={styles.rangeUnitSelector}
                      size="small"
                      allowClear={false}
                      defaultValue="month"
                      options={[
                        { value: 'day', label: 'Day' },
                        { value: 'week', label: 'Week' },
                        { value: 'month', label: 'Month' },
                      ]}
                    />
                  </Form.Item>
                </Form>
              </Flex>
            )}
          />
        </Card>
      </Space>
    </PageLayout>
  );
};

export default CalendarPage;
