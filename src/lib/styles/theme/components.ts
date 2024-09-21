import { type ConfigProviderProps, type ThemeConfig } from 'antd';

import { validateMessages } from '@/lib/constants/form';

import { tokenConfig } from './token';

export const componentsToken: ThemeConfig['components'] = {
  Button: {
    primaryShadow: '0 2px 0 rgba(0,0,0,0.045)',
    defaultShadow: '0 2px 0 rgba(0, 0, 0, 0.015)',
    fontWeight: '500',
  },
  Tabs: {
    cardPadding: '8px 0',
    cardGutter: 2,
    horizontalMargin: '0 32px 0 0',
    horizontalItemMargin: '0 32px 0 0',
  },
  DatePicker: {
    controlHeightSM: 24,
  },
  Menu: {
    subMenuItemBg: 'transparent',
    itemSelectedBg: tokenConfig?.colorBgLayout,
    itemSelectedColor: 'black',
    iconSize: 20,
  },
  Segmented: {
    colorBgLayout: 'rgba(0,0,0,.04)',
    borderRadiusSM: 10,
  },
  Pagination: {
    borderRadius: 12,
    colorPrimary: 'white',
    colorPrimaryHover: 'white',
    itemActiveBg: tokenConfig?.colorPrimary,
  },
  Tag: {
    lineWidth: 0,
  },
  Modal: {
    titleFontSize: 20,
  },
  Layout: {
    headerBg: 'white',
    headerPadding: 0,
    siderBg: 'white',
  },
  Form: {
    labelFontSize: 12,
    verticalLabelPadding: '0.25rem 0',
    labelColor: '#808191',
  },
  Descriptions: {
    colorTextSecondary: '#808191',
  },
  Switch: {
    colorPrimary: '#08B744',
    colorPrimaryHover: '#08B744',
  },
  Calendar: {
    controlItemBgActive: 'transparent',
  },
};

export const componentsConfig: ConfigProviderProps = {
  modal: {
    styles: {
      header: {
        paddingBottom: '0.75rem',
        marginBottom: '1rem',
        borderBottom: '1px solid #e4e4e4',
      },
      content: { borderRadius: 16 },
      mask: {
        backdropFilter: 'blur(8px)',
      },
    },
  },
  form: {
    validateMessages: validateMessages,
  },
  space: {
    style: {
      width: '100%',
    },
  },
  datePicker: {
    style: {
      width: '100%',
    },
  },
  rangePicker: {
    style: {
      width: '100%',
    },
  },
};
