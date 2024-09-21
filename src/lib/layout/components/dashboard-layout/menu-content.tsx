import { Menu } from 'antd';
import { type SubMenuType } from 'antd/es/menu/interface';
import { createStyles } from 'antd-style';
import { Link } from 'react-router-dom';

import {
  type NavigationItem,
  type NavigationMenuItemType,
  navigationMenus,
} from '@/lib/constants/menu-config';
import { useBreakpointValue } from '@/lib/hooks/use-breakpoint-value';

import { useLayoutStore } from './store';

const MenuLabel = (item: NavigationItem) => {
  const { label, path } = item as NavigationMenuItemType;
  if (item === null) {
    return null;
  }

  if ((item as SubMenuType).children || !path) {
    return label;
  }

  return <Link to={path}>{label}</Link>;
};

type MenuItemsProps = {
  navigationMenus: Array<NavigationItem>;
};

const renderMenuItems = ({
  navigationMenus,
}: MenuItemsProps): Array<NavigationItem> => {
  return navigationMenus.map((navigationMenu) => {
    return {
      ...navigationMenu,
      label: MenuLabel(navigationMenu),
      ...((navigationMenu as SubMenuType).children
        ? {
            children: renderMenuItems({
              navigationMenus: (navigationMenu as SubMenuType)
                .children as Array<NavigationItem>,
            }),
          }
        : null),
    };
  });
};

const useStyles = createStyles({
  menuContainer: {
    borderInlineEnd: 'none !important',
    margin: '0.75rem 0',
  },
});

export const MenuContent = () => {
  const { styles } = useStyles();
  const isMobileMenuOpen = useLayoutStore((state) => state.isMobileMenuOpen);
  const setIsMobileMenuOpen = useLayoutStore(
    (action) => action.setIsMobileMenuOpen
  );
  const { isMobile } = useBreakpointValue();

  const handleClickMenu = () => {
    if (!isMobile) {
      return;
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Menu
      className={styles.menuContainer}
      mode="inline"
      items={renderMenuItems({ navigationMenus })}
      onClick={handleClickMenu}
      disabledOverflow
    />
  );
};
