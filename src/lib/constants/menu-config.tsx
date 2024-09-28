import {
  HomeFilled,
  UserOutlined,
  BookFilled,
  AuditOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { type ItemType, type MenuItemType } from 'antd/es/menu/interface';

import {
  calendarMenuLabel,
  caseMenuLabel,
  clientMenuLabel,
  homeMenuLabel,
  orderMenuLabel,
} from '@/lib/constants/menu-label';
import {
  calendarPath,
  casePath,
  clientPath,
  homePath,
  orderPath,
} from '@/lib/constants/routes';
import { type AccessMenuKey } from '@/lib/services/api/access-menu-services/types';

export type NavigationMenuItemType = {
  path?: string;
  // TODO: make this required when service is ready
  accessMenuKey?: AccessMenuKey;
} & MenuItemType;

export type NavigationItem = NonNullable<ItemType<NavigationMenuItemType>>;

export const homeMenu: NavigationMenuItemType = {
  key: 'home',
  label: homeMenuLabel,
  icon: <HomeFilled />,
  path: homePath,
};

export const clientMenu: NavigationMenuItemType = {
  key: 'client',
  label: clientMenuLabel,
  icon: <UserOutlined />,
  path: clientPath,
};

export const orderMenu: NavigationMenuItemType = {
  key: 'order',
  label: orderMenuLabel,
  icon: <BookFilled />,
  path: orderPath,
};

export const caseMenu: NavigationMenuItemType = {
  key: 'case',
  label: caseMenuLabel,
  icon: <AuditOutlined />,
  path: casePath,
};

export const calendarMenu: NavigationMenuItemType = {
  key: 'calendar',
  label: calendarMenuLabel,
  icon: <CalendarOutlined />,
  path: calendarPath,
};

export const navigationMenus: Array<NavigationItem> = [
  homeMenu,
  clientMenu,
  orderMenu,
  calendarMenu,
  caseMenu,
];
