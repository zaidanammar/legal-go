import { Flex, Tag, Typography } from 'antd';
import { createStyles } from 'antd-style';
import dayjs from 'dayjs';
import startCase from 'lodash/startCase';

import { DATE_FORMAT_dddd_DD_MMM_YYYY } from '@/lib/constants/date';
import { deployContext, isProduction } from '@/lib/constants/env';
import { ModalProvider } from '@/lib/providers/modal';

import { LiveClock } from './live-clock';
import { NavProfile } from './nav-profile';

const useStyles = createStyles(({ responsive }) => ({
  container: {
    marginLeft: 'auto',
    marginRight: '1rem',
  },
  currentTimeContainer: {
    [responsive.mobile]: {
      display: 'none',
    },
  },
  currentTimeText: {
    fontSize: 12,
    color: '#808191',
  },
  currentDateText: {
    color: 'black',
  },
  profileBox: {
    borderRadius: 16,
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    [responsive.tablet]: {
      backgroundColor: 'transparent',
      padding: 0,
    },
  },
}));

export const ProfileBox = () => {
  const { styles, cx } = useStyles();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <Flex align="center" gap={12} className={styles.container}>
      {!isProduction ? <Tag color="red">{startCase(deployContext)}</Tag> : null}
      <Flex vertical align="end" className={styles.currentTimeContainer}>
        <Typography.Text
          strong
          className={cx(styles.currentTimeText, styles.currentDateText)}
        >
          {dayjs().format(DATE_FORMAT_dddd_DD_MMM_YYYY)}
        </Typography.Text>
        <Typography.Text className={styles.currentTimeText}>
          <LiveClock className={styles.currentTimeText} /> {timezone}
        </Typography.Text>
      </Flex>
      <div className={styles.profileBox}>
        <ModalProvider>
          <NavProfile />
        </ModalProvider>
      </div>
    </Flex>
  );
};
