import { CalendarOutlined } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Flex,
  Form,
  Select,
  Space,
  Tabs,
  Typography,
} from 'antd';
import { createStyles, css } from 'antd-style';
import dayjs, { type Dayjs } from 'dayjs';
import { useCallback, useMemo, useState } from 'react';

import { DATE_FORMAT_YYYY_MM_DD } from '@/lib/constants/date';
import { useBreakpointValue } from '@/lib/hooks/use-breakpoint-value';
import { useQueryParams } from '@/lib/hooks/use-query-params';
import { dateFormatter } from '@/lib/utils/date/date-formatter';

import { labelMap } from './utils';

export type DatePickerTabMode = 'day' | 'week' | 'month';

const useStyles = createStyles({
  dateTabs: {
    maxWidth: '100%',
  },
  rangeUnitSelector: {
    minWidth: 180,
    justifySelf: 'end',
  },
  timeRangePopup: css`
    :global(.ant-picker-dropdown) {
      display: none;
    }
  `,
});

type DatePickertabProps = {
  title?: string;
  onChange?: (dateStart: Dayjs, dateEnd: Dayjs) => void;
  startDateKey?: string;
  endDateKey?: string;
};

export const DatePickertab = ({
  title = 'Ekspektasi Tanggal Pencairan',
  onChange,
  startDateKey = 'start_date',
  endDateKey = 'end_date',
}: DatePickertabProps) => {
  const { getSearchParamsValue, handleUpdateSearchParams } = useQueryParams();
  const localStartDate = useMemo(() => {
    const paramStartDateValue = getSearchParamsValue(startDateKey);
    if (paramStartDateValue) {
      return dayjs(paramStartDateValue);
    }
    return dayjs();
  }, [getSearchParamsValue, startDateKey]);

  const [open, setOpen] = useState(false);
  const { isMobile } = useBreakpointValue();
  const { styles } = useStyles();

  const mode = useMemo<DatePickerTabMode>(() => {
    const startDate = localStartDate;
    const endDate = getSearchParamsValue(endDateKey);

    if (
      dayjs(startDate).startOf('month').toString() ===
        dayjs(startDate).toString() &&
      dayjs(endDate).endOf('month').toString() ===
        dayjs(endDate).endOf('day').toString()
    ) {
      return 'month';
    }

    if (
      dayjs(startDate).startOf('week').toString() ===
        dayjs(startDate).toString() &&
      dayjs(endDate).endOf('week').toString() ===
        dayjs(endDate).endOf('day').toString()
    ) {
      return 'week';
    }

    return 'day';
  }, [endDateKey, getSearchParamsValue, localStartDate]);

  const openChange = (open: boolean) => {
    setOpen(open);
  };

  const constructedDate = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => {
        return dayjs(localStartDate)
          .add(i - 2, mode)
          .toDate();
      }),
    [localStartDate, mode]
  );

  const dateItems = useMemo(() => {
    return constructedDate.map((date, index) => {
      return {
        key: index.toString(),
        label: labelMap(mode, date),
      };
    });
  }, [constructedDate, mode]);

  const handleChangeDate = useCallback(
    (date: Dayjs, selectedMode = mode) => {
      const inputMode = selectedMode ?? mode;

      const startDate = dayjs(date).startOf(inputMode);
      const startDateString = dateFormatter({
        date: startDate,
        format: DATE_FORMAT_YYYY_MM_DD,
      });
      const endDate = dayjs(date).endOf(inputMode);
      const endDateString = dateFormatter({
        date: endDate,
        format: DATE_FORMAT_YYYY_MM_DD,
      });

      onChange?.(startDate, endDate);
      handleUpdateSearchParams({
        [startDateKey]: startDateString,
        [endDateKey]: endDateString,
      });
    },
    [endDateKey, handleUpdateSearchParams, mode, onChange, startDateKey]
  );

  const handleTabChange = useCallback(
    (key: string) => {
      const date = dayjs(constructedDate[parseInt(key)]);
      handleChangeDate(date, mode);
    },
    [constructedDate, handleChangeDate, mode]
  );

  return (
    <Flex vertical>
      <Typography.Text strong>{title}</Typography.Text>
      <Flex justify="space-between" wrap="wrap">
        <Tabs
          activeKey="2"
          className={styles.dateTabs}
          defaultActiveKey="2"
          onChange={handleTabChange}
          items={dateItems}
          tabBarExtraContent={{
            right: (
              <div style={{ marginLeft: 16 }}>
                <DatePicker
                  open={open}
                  showHour
                  showMinute
                  onChange={(date) => handleChangeDate(date)}
                  picker={mode === 'day' ? 'date' : mode}
                  onOpenChange={openChange}
                  style={{ width: 0, border: 'none', padding: 0 }}
                  popupClassName={styles.timeRangePopup}
                />

                <Space.Compact style={{ width: 'calc(100% - 2px)' }}>
                  <Button
                    icon={<CalendarOutlined />}
                    onClick={() => openChange(true)}
                  />
                </Space.Compact>
              </div>
            ),
          }}
        />

        <Form layout="horizontal">
          <Form.Item label={isMobile ? '' : 'Range'}>
            <Select
              className={styles.rangeUnitSelector}
              value={mode}
              onChange={(value) =>
                handleChangeDate(localStartDate, value as DatePickerTabMode)
              }
              size="small"
              allowClear={false}
              options={[
                { value: 'day', label: 'Day' },
                { value: 'week', label: 'Week' },
                { value: 'month', label: 'Month' },
              ]}
            />
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  );
};
