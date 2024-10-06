import { MenuOutlined } from '@ant-design/icons';
import { Button, Layout, Typography } from 'antd';
import { createStyles } from 'antd-style';
import { Link, useLocation } from 'react-router-dom';

import {
  aboutUsPath,
  contactPath,
  landingPagePath,
  loginPath,
  servicesPath,
} from '@/lib/constants/routes';
import { useBreakpointValue } from '@/lib/hooks/use-breakpoint-value';
import { Logo } from '@/lib/layout/components/dashboard-layout/logo';

const { Header } = Layout;

const bgImage = '/images/bg-image-legal-go.png';

const items = [
  { key: '1', label: 'Home', href: landingPagePath },
  {
    key: '2',
    label: 'Jasa',
    href: servicesPath,
  },
  { key: '3', label: 'Tentang Kami', href: aboutUsPath },
  { key: '4', label: 'Kontak kami', href: contactPath },
];

const useStyles = createStyles({
  header: {
    textAlign: 'center',
    color: '#fff',
    height: 90,
    paddingInline: 48,
    backgroundColor: '#fff',
    boxShadow: '0px 4px 4px 0px #0000000D',
    display: 'flex',
    flexDirection: 'row',
  },
  bgContainer: {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    position: 'relative',
  },
  menuWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    justifyItems: 'center',
    alignItems: 'center',
    flexGrow: 1,
    gap: 24,
  },
  menuItem: {
    color: '#565658',
    marginInline: 12,
  },
  menuSidebar: {
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'end',
    flexGrow: 1,
    color: '#565658',
  },
});

const LandingPage = () => {
  const { pathname } = useLocation();
  const { styles } = useStyles();
  const { isMobile } = useBreakpointValue();

  return (
    <div className={styles.bgContainer}>
      <Header className={styles.header}>
        <Logo />
        {isMobile ? (
          <div className={styles.menuSidebar}>
            <MenuOutlined />
          </div>
        ) : (
          <div className={styles.menuWrapper}>
            {items.map((item) => (
              <Link key={item.key} to={item.href}>
                <Typography.Text
                  className={styles.menuItem}
                  style={{
                    fontWeight: pathname === item.href ? 'bold' : 'normal',
                  }}
                >
                  {item.label}
                </Typography.Text>
              </Link>
            ))}
            <Link to={loginPath}>
              <Button type="primary">Masuk</Button>
            </Link>
          </div>
        )}
      </Header>

      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: 'calc(100vh - 300px)',
          left: isMobile ? 40 : 100,
        }}
      >
        <Typography.Text
          style={{ color: '#fff', fontWeight: 300, fontSize: 52 }}
        >
          Layanan Hukum
        </Typography.Text>
        <Typography.Title
          level={3}
          style={{ color: '#fff', fontWeight: 700, fontSize: 52 }}
        >
          Menjadi Mudah
        </Typography.Title>
        <Typography.Text
          style={{
            maxWidth: 400,
            color: '#fff',
            fontWeight: 300,
          }}
        >
          Curabitur gravida arcu ac tortor dignissim convallis aenean et. Metus
          dictum at tempor commodo.
        </Typography.Text>
        <div style={{ marginTop: 20, display: 'flex', gap: 24 }}>
          <Link to={loginPath}>
            <Button type="primary" style={{ padding: '0 65px' }}>
              Masuk
            </Button>
          </Link>
          <Link to={contactPath}>
            <Button
              type="primary"
              ghost
              style={{ padding: '0 45px', background: '#fff', border: 'none' }}
            >
              Kontak Kami
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
