import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Flex, Typography } from 'antd';
import { createStyles } from 'antd-style';
import { useNavigate } from 'react-router-dom';

import { loginPath } from '@/lib/constants/routes';
import { useAuth } from '@/lib/stores/auth';
import { useUserStore } from '@/lib/stores/user';

const useStyles = createStyles({
  avatar: {
    width: 40,
    height: 40,
  },
  profileInfo: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    '@media screen and (max-width: 992px)': {
      display: 'none',
    },
  },
  userName: {
    fontWeight: 700,
  },
  subtitle: {
    fontSize: '0.75rem',
    color: '#B6B6B6',
  },
});

export const NavProfile = () => {
  const navigate = useNavigate();
  const { styles } = useStyles();
  const { clearAuth } = useAuth();
  const { userDetail } = useUserStore();

  const handleLogout = () => {
    clearAuth();
    navigate(loginPath);
  };

  return (
    <Dropdown
      placement="bottomRight"
      menu={{
        items: [
          {
            icon: <LogoutOutlined />,
            label: 'Log Out',
            key: 'log-out',
            onClick: handleLogout,
          },
        ],
      }}
    >
      <Flex align="center" gap={8}>
        <Flex vertical align="end" className={styles.profileInfo}>
          <Typography.Text className={styles.userName}>
            {userDetail?.name}
          </Typography.Text>
          <Typography.Text className={styles.subtitle}>
            {userDetail?.role}
          </Typography.Text>
        </Flex>
        <Avatar className={styles.avatar} icon={<UserOutlined />} />
      </Flex>
    </Dropdown>
  );
};
