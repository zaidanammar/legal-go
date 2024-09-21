import { UploadOutlined } from '@ant-design/icons';
import { Button, Typography, Upload, type UploadProps, message } from 'antd';
import { createStyles } from 'antd-style';
import { useMemo } from 'react';

import { Can } from '@/lib/components/can';
import { imageFileTypes } from '@/lib/constants/data/fileTypes';
import { type AccessMenuKey } from '@/lib/services/api/access-menu-services/types';
import { singleFile, multiFile } from '@/lib/utils/input/upload';

import { InputItem, type InputItemProps } from './input-item';

const useStyles = createStyles({
  maxFileSizeDescription: {
    color: '#a4a4a4',
  },
});

type UploadInputProps = {
  inputWrapper?: Omit<InputItemProps, 'multiple'>;
  uploadProps?: Omit<UploadProps, 'multiple'>;
  extra?: React.ReactNode;
  triggerLabel?: React.ReactNode;
  maxFileSize?: number;
  multiple?: UploadProps['multiple'];
  uploadAccessKey?: AccessMenuKey;
  showMaxFileSizeDescription?: boolean;
};

const SINGLE_MEGABYTE = 1048576;

const beforeUpload = (file: File, maxFileSize?: number) => {
  const maxSize = maxFileSize ?? 5;
  const isSelectedFileEqualOrLessThanMaxFileSize =
    file.size <= maxSize * SINGLE_MEGABYTE;

  if (!isSelectedFileEqualOrLessThanMaxFileSize) {
    message.error(`Ukuran File tidak boleh melebihi ${maxSize} MB!`);
    return Upload.LIST_IGNORE;
  }
  return false;
};

export const UploadInput = ({
  inputWrapper,
  uploadProps,
  extra,
  triggerLabel = 'Upload Dokumen',
  maxFileSize = 15,
  multiple = false,
  uploadAccessKey,
  showMaxFileSizeDescription = true,
}: UploadInputProps) => {
  const { styles } = useStyles();
  const filePickerTrigger = useMemo(
    () => (
      <Button type="primary" block icon={<UploadOutlined />}>
        {triggerLabel}
      </Button>
    ),
    [triggerLabel]
  );

  return (
    <InputItem
      valuePropName="fileList"
      getValueFromEvent={multiple ? multiFile : singleFile}
      extra={
        <>
          {extra}
          {showMaxFileSizeDescription ? (
            <Typography.Text className={styles.maxFileSizeDescription}>
              Ukuran File Maksimum: {maxFileSize} MB
            </Typography.Text>
          ) : null}
        </>
      }
      {...inputWrapper}
    >
      <Upload
        multiple={multiple}
        beforeUpload={(file) => beforeUpload(file, maxFileSize)}
        listType="picture"
        accept={imageFileTypes.join(',')}
        {...uploadProps}
      >
        {uploadAccessKey ? (
          <Can access={uploadAccessKey}>{filePickerTrigger}</Can>
        ) : (
          filePickerTrigger
        )}
      </Upload>
    </InputItem>
  );
};
