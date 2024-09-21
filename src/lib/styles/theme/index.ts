import type { ThemeConfig } from 'antd';

import { componentsToken } from './components';
import { tokenConfig } from './token';

export const appTheme: ThemeConfig = {
  token: tokenConfig,
  components: componentsToken,
  cssVar: true,
};
