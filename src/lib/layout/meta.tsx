import { Helmet } from 'react-helmet';

import { siteConfig } from '@/lib/constants/site-config';

const APP_NAME = 'legal-go';

export const Meta = () => {
  return (
    <Helmet>
      <title>{siteConfig.companyName}</title>
      <meta name="description" content={`${siteConfig.companyName}`} />

      <meta name="application-name" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#FFFFFF" />

      <link rel="shortcut icon" href={siteConfig.faviconURL} />
    </Helmet>
  );
};
