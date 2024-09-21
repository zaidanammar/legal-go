import { FileFilled } from '@ant-design/icons';
import { Button, Image, type ImageProps } from 'antd';

import { detectFileTypeFromUrl } from '@/lib/utils/url/detect-file-type-from-url';

type PreviewImageProps = Omit<ImageProps, 'src'> & {
  src?: string;
  documentLabelFallback?: string;
};

export const PreviewImage = ({
  src,
  documentLabelFallback,
  style,
  ...imageProps
}: PreviewImageProps) => {
  if (!src) {
    return null;
  }

  if (detectFileTypeFromUrl(src) !== 'image') {
    return (
      <Button
        type="primary"
        icon={<FileFilled />}
        onClick={() => {
          window.open(src, '_blank');
        }}
      >
        {documentLabelFallback}
      </Button>
    );
  }

  return (
    <Image
      crossOrigin="anonymous"
      src={src}
      width="100%"
      {...imageProps}
      style={{
        borderRadius: '12px',
        maxWidth: '400px',
        maxHeight: '400px',
        ...style,
      }}
    />
  );
};
