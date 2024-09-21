import { Button, Flex } from 'antd';
import { type ButtonProps } from 'antd/lib';
import { createStyles, type CSSObject } from 'antd-style';
import { type CSSProperties } from 'react';

import { stickyContainerStyle } from '@/lib/styles/components/sticky-cta';

const useStyles = createStyles({
  ctaContainer: stickyContainerStyle,
});

type SubmitCTASectionProps = {
  saveButtonLabel?: string;
  saveButtonProps?: ButtonProps;
  cancelButtonLabel?: string;
  cancelButtonProps?: ButtonProps;
  containerStyle?: CSSObject;
};

export const SubmitCTASection = ({
  saveButtonProps,
  cancelButtonProps,
  saveButtonLabel = 'Simpan',
  cancelButtonLabel = 'Kembali',
  containerStyle,
}: SubmitCTASectionProps) => {
  const { styles } = useStyles();

  return (
    <Flex
      gap={16}
      style={containerStyle as CSSProperties}
      className={styles.ctaContainer}
      justify="end"
    >
      {cancelButtonProps?.onClick && (
        <Button {...cancelButtonProps}>{cancelButtonLabel}</Button>
      )}
      <Button htmlType="submit" type="primary" {...saveButtonProps}>
        {saveButtonLabel}
      </Button>
    </Flex>
  );
};
