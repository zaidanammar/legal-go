import { Layout, Tag } from 'antd';
import { createStyles } from 'antd-style';
import startCase from 'lodash/startCase';

import { deployContext, isProduction } from '@/lib/constants/env';

import { ProfileBox } from './profile-box';
import { SidebarCollapseTriggerButton } from './sidebar-collapse-trigger-button';

export const useStyles = createStyles({
  header: {
    boxShadow: 'var(--ant-box-shadow)',
    zIndex: 4,
    display: 'flex',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    backgroundColor: 'var(--ant-color-bg-layout)',
    height: 104,
  },
});

export const Header = () => {
  const { styles } = useStyles();

  return (
    <Layout.Header className={styles.header}>
      <SidebarCollapseTriggerButton />
      {!isProduction ? <Tag color="red">{startCase(deployContext)}</Tag> : null}
      <ProfileBox />
    </Layout.Header>
  );
};
