import { UserOutlined } from '@ant-design/icons';
import { Button, Card, Flex, Form, Input, Space, Spin, Typography } from 'antd';
import { createStyles } from 'antd-style';
import { Link } from 'react-router-dom';

import { InputItem } from '@/lib/components/data-entry/input-item';
import {
  forgetPasswordPath,
  registerPath,
  resetPasswordPath,
} from '@/lib/constants/routes';
import { siteConfig } from '@/lib/constants/site-config';

import { useLoginPage } from './hooks';

const useStyles = createStyles({
  rootContainer: {
    background:
      'linear-gradient(90deg, rgb(245, 247, 250) 0%, rgb(195, 207, 226) 100%)',
    height: '100dvh',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContainer: {
    width: 400,
    maxWidth: 560,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backgroundImage:
      'radial-gradient(circle at 93% 1e+02%, rgba(22,119,255,0.17) 0%, rgba(255,255,255,0.05) 23%, rgba(255,255,255,0.03) 87%, rgba(22,119,255,0.12) 109%)',
    boxShadow: '0px 0px 24px 0px rgba(0,0,0,0.1)',
  },
  subtitleText: {
    textAlign: 'center',
    margin: '0 2rem',
    color: '#565658',
  },
  formWrapper: {
    width: '100%',
  },
});

const LoginPage = () => {
  const { styles, cx } = useStyles();
  const { form, isMutating, handleLogin } = useLoginPage();

  return (
    <div className={cx(styles.rootContainer)}>
      <Card className={styles.cardContainer}>
        <Flex vertical gap={12}>
          <Flex vertical align="center" justify="center" gap={16}>
            <img alt="logo" src={siteConfig.logoURL} width="100px" />
            <Typography.Text className={styles.subtitleText}>
              Selamat Datang, silakan masukkan akun Anda untuk melanjutkan!
            </Typography.Text>
          </Flex>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleLogin}
            className={styles.formWrapper}
          >
            <Spin spinning={isMutating}>
              <Space direction="vertical" size="small">
                <InputItem
                  fullWidth
                  name="email"
                  label="Email/No. Telepon"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    size="small"
                    prefix={<UserOutlined />}
                    placeholder="Contoh: legal@legalgo.id"
                  />
                </InputItem>
                <InputItem
                  fullWidth
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input.Password
                    size="small"
                    placeholder="Masukkan Kata Sandi"
                  />
                </InputItem>

                <Flex align="center" justify="space-between" gap={16}>
                  <Link to={forgetPasswordPath}>
                    <Typography.Text
                      style={{
                        color: '#565658',
                      }}
                    >
                      Lupa kata sandi?
                    </Typography.Text>
                  </Link>
                  <Link to={resetPasswordPath}>
                    <Typography.Text
                      strong
                      style={{
                        color: '#4C5CA0',
                      }}
                    >
                      Reset kata sandi
                    </Typography.Text>
                  </Link>
                </Flex>

                <Button
                  block
                  type="primary"
                  size="small"
                  htmlType="submit"
                  style={{
                    marginTop: 16,
                  }}
                >
                  Masuk
                </Button>
              </Space>
            </Spin>
          </Form>
        </Flex>
      </Card>
      <Flex
        style={{
          marginTop: 16,
        }}
        vertical
        align="center"
        justify="space-between"
        gap={16}
      >
        <Typography.Text
          style={{
            color: '#565658',
          }}
        >
          Belum punya akun?
        </Typography.Text>
        <Link to={registerPath}>
          <Typography.Text
            strong
            style={{
              color: '#4C5CA0',
            }}
          >
            Daftar Disini
          </Typography.Text>
        </Link>
      </Flex>
    </div>
  );
};

export default LoginPage;
