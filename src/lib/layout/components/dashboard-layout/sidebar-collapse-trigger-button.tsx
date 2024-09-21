import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { useBreakpointValue } from '@/lib/hooks/use-breakpoint-value';

import { useLayoutStore } from './store';

export const SidebarCollapseTriggerButton = () => {
  const { collapsed, isMobileMenuOpen } = useLayoutStore((state) => ({
    collapsed: state.collapsed,
    isMobileMenuOpen: state.isMobileMenuOpen,
  }));
  const { setCollapsed, setIsMobileMenuOpen } = useLayoutStore((action) => ({
    setCollapsed: action.setCollapsed,
    setIsMobileMenuOpen: action.setIsMobileMenuOpen,
  }));
  const { isMobile } = useBreakpointValue();

  const handleClickMenu = () => {
    if (isMobile) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
      return;
    }
    setCollapsed(!collapsed);
  };
  return (
    <Button
      type="text"
      icon={
        collapsed || isMobile ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
      }
      onClick={handleClickMenu}
      size="large"
    />
  );
};
