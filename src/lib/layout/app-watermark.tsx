import { Watermark } from 'antd';
import capitalize from 'lodash/capitalize';
import { type PropsWithChildren } from 'react';

import { deployContext, isProduction } from '@/lib/constants/env';
import { siteConfig } from '@/lib/constants/site-config';
import { tokenConfig } from '@/lib/styles/theme/token';

type AppWatermarkProps = PropsWithChildren & {
  hideWatermark?: boolean;
};

export const AppWatermark = ({
  children,
  hideWatermark,
}: AppWatermarkProps) => {
  if (isProduction || hideWatermark) {
    return children;
  }

  return (
    <Watermark
      font={{
        fontFamily: tokenConfig?.fontFamily,
        fontSize: tokenConfig?.fontSize,
      }}
      content={[siteConfig.companyName, `${capitalize(deployContext)} Preview`]}
    >
      {children}
    </Watermark>
  );
};
