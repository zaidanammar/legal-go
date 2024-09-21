import dayjs from 'dayjs';

import {
  DATE_FORMAT_MMM_YYYY,
  DATE_FORMAT_DD_MMM,
  DATE_FORMAT_DD_MMM_YYYY,
} from '@/lib/constants/date';
import { dateFormatter } from '@/lib/utils/date/date-formatter';

import { type DatePickerTabMode } from '.';

export const labelMap = (mode: DatePickerTabMode, date: Date) => {
  const daysjsDate = dayjs(date);
  const labelMap: Record<string, string> = {
    day: dateFormatter({
      date: daysjsDate,
      format: DATE_FORMAT_DD_MMM_YYYY,
      fallback: '',
    }),
    week: `${dateFormatter({ date: daysjsDate.startOf('week'), format: DATE_FORMAT_DD_MMM, fallback: '' })} - ${dateFormatter({ date: daysjsDate.endOf('week'), format: DATE_FORMAT_DD_MMM, fallback: '' })}`,
    month: dateFormatter({
      date: daysjsDate,
      format: DATE_FORMAT_MMM_YYYY,
      fallback: '',
    }),
  };

  return labelMap[mode];
};
