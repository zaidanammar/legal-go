import { Flex, Result, Typography } from 'antd';
import { createStyles } from 'antd-style';

import { Footer } from '@/lib/layout/components/dashboard-layout/footer';
import { Logo } from '@/lib/layout/components/dashboard-layout/logo';

const useStyles = createStyles({
  container: {
    height: '100dvh',
  },
});

const InMaintenanceMode = () => {
  const { styles } = useStyles();

  return (
    <Flex
      vertical
      className={styles.container}
      justify="center"
      align="center"
      gap={16}
    >
      <Logo isLogoOnly />
      <Result
        status="info"
        title={
          <Typography.Title level={3}>
            Pemiliharaan Sistem - Kami Segera Kembali
          </Typography.Title>
        }
        subTitle=" Maaf atas ketidaknyamanan ini. Saat ini kami sedang melakukan
        pemiliharaan rutin untuk meningkatkan kualitas layanan. Terima Kasih
        atas kesabaran dan pengertian Anda"
      />
      <Footer />
    </Flex>
  );
};

export default InMaintenanceMode;
