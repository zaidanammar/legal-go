import { Card, Row, type UploadProps } from 'antd';

import { type InputItemProps } from '@/lib/components/data-entry/input-item';
import { UploadInput } from '@/lib/components/data-entry/upload-input';
import { SectionWrapper } from '@/lib/components/layout/section-wrapper';

export type DocumentInputCardProps = React.PropsWithChildren<{
  title: string;
  documentInputItemProps: InputItemProps;
  uploadInputProps?: UploadProps;
  extra?: React.ReactNode;
}>;

export const DocumentInputCard = ({
  title,
  children,
  extra,
  documentInputItemProps,
}: DocumentInputCardProps) => {
  return (
    <Card>
      <SectionWrapper title={title}>
        {children}
        <Row gutter={16}>
          <UploadInput
            inputWrapper={{
              label: 'Upload Dokumen',
              fullWidth: true,
              rules: [{ required: true }],
              ...documentInputItemProps,
            }}
          />
        </Row>
        {extra}
      </SectionWrapper>
    </Card>
  );
};
