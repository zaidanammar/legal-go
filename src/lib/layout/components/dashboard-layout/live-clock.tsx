import { useEffect, useState } from 'react';

import { dateFormatter } from '@/lib/utils/date/date-formatter';

type LiveClockProps = {
  className?: string;
  format?: string;
  interval?: number;
};

export const LiveClock = ({
  className,
  format = 'HH:mm:ss',
  interval = 1000,
}: LiveClockProps) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, interval);

    return () => clearInterval(timerId);
  }, [interval]);

  return (
    <time className={className}>{dateFormatter({ date: time, format })}</time>
  );
};
