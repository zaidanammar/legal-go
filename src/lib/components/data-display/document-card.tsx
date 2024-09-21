import { Card, Col, Divider, Row, Typography } from 'antd';
import { type CardProps } from 'antd/lib';

import { PreviewImage } from '@/lib/components/data-display/preview-image';

type DocumentCardProps = {
  title: string;
  documentImage?: Array<string> | string;
  documentLabel?: Array<string> | string;
  topSection?: React.ReactNode;
  bottomSection?: React.ReactNode;
} & CardProps;

export const DocumentCard = ({
  title,
  documentImage,
  topSection,
  bottomSection,
  documentLabel,
  ...props
}: DocumentCardProps) => {
  return (
    <Card {...props}>
      <Typography.Title level={4}>{title}</Typography.Title>
      <Divider />
      {topSection}
      {Array.isArray(documentImage) ? (
        <Row gutter={16}>
          {documentImage?.map((item, index) => (
            <Col key={item} span={24} md={12} xl={8}>
              <div className="mb-2">
                <Typography.Text>
                  {Array.isArray(documentLabel)
                    ? documentLabel[index]
                    : `${documentLabel} - ${index + 1}`}
                </Typography.Text>
              </div>
              <PreviewImage
                src={item}
                alt={item}
                documentLabelFallback={
                  Array.isArray(documentLabel)
                    ? documentLabel[index]
                    : `${documentLabel} - ${index + 1}`
                }
              />
            </Col>
          ))}
        </Row>
      ) : (
        <>
          <div>
            <Typography.Text>{documentLabel}</Typography.Text>
          </div>
          <PreviewImage
            src={documentImage}
            alt={title}
            style={{
              maxWidth: '200px',
            }}
          />
        </>
      )}
      {bottomSection}
    </Card>
  );
};
