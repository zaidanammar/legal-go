import { UserOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Divider,
  Flex,
  Form,
  Input,
  Space,
  Spin,
  Typography,
} from 'antd';
import { createStyles } from 'antd-style';
import { Link } from 'react-router-dom';

import { InputItem } from '@/lib/components/data-entry/input-item';
import { SearchableSelect } from '@/lib/components/data-entry/searchable-select';
import { loginPath } from '@/lib/constants/routes';
import { siteConfig } from '@/lib/constants/site-config';

import { useRegisterPage } from './hooks';

const useStyles = createStyles({
  rootContainer: {
    background: '#FFF',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 60,
    paddingBottom: 60,
  },
  cardContainer: {
    width: 400,
    maxWidth: 560,
  },
  subtitleText: {
    textAlign: 'center',
    margin: '0 2rem',
    color: '#565658',
  },
  formWrapper: {
    width: '100%',
    marginTop: 16,
  },
});

const RegisterPage = () => {
  const { styles, cx } = useStyles();
  const { form, isMutating, handleRegister } = useRegisterPage();

  return (
    <div className={cx(styles.rootContainer)}>
      <div className={styles.cardContainer}>
        <Flex vertical gap={12}>
          <Flex vertical align="center" justify="center" gap={16}>
            <img alt="logo" src={siteConfig.logoURL} width="100px" />
            <Flex vertical style={{ marginTop: 16 }} gap={16}>
              <Typography.Text strong className={styles.subtitleText}>
                Pendaftaran Akun Aplikasi
              </Typography.Text>
              <Typography.Text className={styles.subtitleText}>
                Silakan daftarkan diri Anda untuk mendapatkan Bantuan Legal dari
                tim kami.
              </Typography.Text>
            </Flex>
          </Flex>

          <Form
            form={form}
            onFinish={handleRegister}
            layout="vertical"
            className={styles.formWrapper}
          >
            <Spin spinning={isMutating}>
              <Space direction="vertical" size="small">
                <InputItem
                  fullWidth
                  name="name"
                  label="Nama"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input size="small" placeholder="Contoh: Alfhiyana" />
                </InputItem>
                <InputItem
                  fullWidth
                  name="phone_number"
                  label="Nomor WhatsApp"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input size="small" placeholder="Contoh: 08xxxxxxxxxx" />
                </InputItem>
                <InputItem
                  fullWidth
                  name="email"
                  label="Email"
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
                <InputItem
                  fullWidth
                  name="confirm_password"
                  label="Konfirmasi Password"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input.Password
                    size="small"
                    placeholder="Masukkan Konfirmasi Kata Sandi"
                  />
                </InputItem>
                <InputItem
                  fullWidth
                  name="user_type"
                  label="Tipe Pengguna"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <SearchableSelect
                    size="small"
                    placeholder="Pilih Tipe Pengguna"
                  />
                </InputItem>
                <Divider style={{ marginTop: 8, marginBottom: 0 }} />

                <InputItem
                  fullWidth
                  name="user_type"
                  label="Tipe Pengguna"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <SearchableSelect
                    size="small"
                    placeholder="Pilih Tipe Pengguna"
                  />
                </InputItem>

                <InputItem
                  fullWidth
                  name="agree"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Checkbox>
                    Dengan mendaftar, saya menyetujui{' '}
                    <Link to="/">
                      <Typography.Text strong>
                        Syarat dan Ketentuan
                      </Typography.Text>{' '}
                    </Link>
                    serta{' '}
                    <Link to="/">
                      <Typography.Text strong>
                        Kebijakan Privasi
                      </Typography.Text>
                    </Link>{' '}
                  </Checkbox>
                </InputItem>

                <Button
                  block
                  type="primary"
                  size="small"
                  htmlType="submit"
                  style={{
                    marginTop: 16,
                  }}
                >
                  Register
                </Button>
              </Space>
            </Spin>
          </Form>
        </Flex>
      </div>
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
          Sudah punya akun?
        </Typography.Text>
        <Link to={loginPath}>
          <Typography.Text
            strong
            style={{
              color: '#4C5CA0',
            }}
          >
            Masuk Disini
          </Typography.Text>
        </Link>
      </Flex>
    </div>
  );
};

export default RegisterPage;
