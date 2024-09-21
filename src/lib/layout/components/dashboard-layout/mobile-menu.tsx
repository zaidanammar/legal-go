import { CloseOutlined } from '@ant-design/icons';
import { Button, Drawer, Flex } from 'antd';

import { useBreakpointValue } from '@/lib/hooks/use-breakpoint-value';

import { Logo } from './logo';
import { MenuContent } from './menu-content';
import { useLayoutStore } from './store';

export const MobileMenu = () => {
  const isMobileMenuOpen = useLayoutStore((state) => state.isMobileMenuOpen);
  const setIsMobileMenuOpen = useLayoutStore(
    (action) => action.setIsMobileMenuOpen
  );
  const handleClose = () => setIsMobileMenuOpen(false);
  const { isMobile } = useBreakpointValue();

  if (!isMobile) {
    return null;
  }

  return (
    <Drawer
      open={isMobileMenuOpen}
      onClose={handleClose}
      placement="left"
      closeIcon={false}
    >
      <Flex justify="space-between">
        <Logo />
        <Button
          size="small"
          type="text"
          icon={<CloseOutlined />}
          onClick={handleClose}
        />
      </Flex>
      <MenuContent />
    </Drawer>
  );
};
