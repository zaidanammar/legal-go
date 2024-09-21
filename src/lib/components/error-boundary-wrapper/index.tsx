import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Result, Typography } from 'antd';
import React from 'react';
import type { FallbackProps } from 'react-error-boundary';

import { checkIsDynamicImportOrChunkLoadError } from '@/lib/components/error-boundary-wrapper/utils';
import { isDevMode } from '@/lib/constants/env';
import { getWithExpiry, setWithExpiry } from '@/lib/utils/local-storage';

export const ErrorBoundaryWrapper = (props: FallbackProps) => {
  const { error } = props;
  const isChunkLoadError = checkIsDynamicImportOrChunkLoadError(error);

  React.useEffect(() => {
    if (isChunkLoadError && !getWithExpiry('chunk_failed')) {
      setWithExpiry('chunk_failed', true, 10000);
      window.location.reload();
    }
  }, [isChunkLoadError]);

  if (isChunkLoadError) {
    return null;
  }

  return (
    <Result
      status="error"
      title={
        <>
          <Typography.Title level={2}>
            Sorry, something went wrong.
          </Typography.Title>
          <Typography.Text>
            Our team is actively working to resolve the issue. Please refresh
            the page in a few moments.
          </Typography.Text>
        </>
      }
      subTitle={
        <>
          <Typography.Title level={2}>
            Maaf, terjadi kesalahan.
          </Typography.Title>
          <Typography.Text>
            Tim kami sedang berusaha untuk memperbaiki masalah ini. Silakan
            refresh halaman beberapa saat lagi.
          </Typography.Text>
        </>
      }
      extra={
        isDevMode
          ? [
              <Button
                type="primary"
                key="retry"
                onClick={props.resetErrorBoundary}
              >
                Retry
              </Button>,
            ]
          : undefined
      }
    >
      {isDevMode ? (
        <Typography.Paragraph>
          <CloseCircleOutlined />
          <pre>{error.message}</pre>
        </Typography.Paragraph>
      ) : null}
    </Result>
  );
};
