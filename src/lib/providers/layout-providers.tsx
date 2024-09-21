import { ConfigProvider } from 'antd';
import idID from 'antd/locale/id_ID';

import { appTheme } from '@/lib/styles/theme';
import { componentsConfig } from '@/lib/styles/theme/components';

export const LayoutProviders = ({ children }: React.PropsWithChildren) => {
  return (
    <ConfigProvider
      theme={appTheme}
      getTargetContainer={() => {
        return document.getElementById('root-layout') || document.body;
      }}
      locale={idID}
      {...componentsConfig}
    >
      {children}
    </ConfigProvider>
  );
};
