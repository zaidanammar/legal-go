import { Flex, Modal, type ModalFuncProps, Typography } from 'antd';
import { type CSSProperties } from 'react';

const warningIcon = '/images/warning.png';

import {
  rejectButtonStyle,
  successButtonStyle,
} from '@/lib/styles/components/button';
import { componentsConfig } from '@/lib/styles/theme/components';

type ShowConfirmationModalParams = ModalFuncProps & {
  description?: string;
  danger?: boolean;
};

export const showConfirmationModal = ({
  title,
  description,
  okText = 'Konfirmasi',
  cancelText = 'Kembali',
  danger = false,
  ...modalFuncProps
}: ShowConfirmationModalParams) => {
  Modal.confirm({
    styles: componentsConfig.modal?.styles,
    title: (
      <Typography.Title style={{ textAlign: 'center', margin: 0 }} level={2}>
        {title}
      </Typography.Title>
    ),
    closable: true,
    icon: null,
    okText,
    cancelText,
    width: 600,
    content: (
      <Flex vertical align="center">
        <p>{description}</p>
        <img
          alt="logo"
          src={warningIcon}
          style={{ marginBottom: 5 }}
          width="96px"
        />
      </Flex>
    ),
    centered: true,
    okButtonProps: {
      size: 'large',
      block: true,
      danger,
      style: {
        margin: 5,
        ...((danger ? rejectButtonStyle : successButtonStyle) as CSSProperties),
      },
    },
    cancelButtonProps: {
      size: 'large',
      block: true,
      style: {
        margin: 5,
      },
    },
    footer: (_, { OkBtn, CancelBtn }) => (
      <Flex>
        <OkBtn />
        <CancelBtn />
      </Flex>
    ),
    ...modalFuncProps,
  });
};
