import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

type LayoutStoreState = {
  collapsed: boolean;
  isMobileMenuOpen: boolean;
};

const INITIAL_LAYOUT_STATE: LayoutStoreState = {
  collapsed: false,
  isMobileMenuOpen: false,
};

type LayoutStoreAction = {
  setCollapsed: (collapsed: boolean) => void;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
  reset: () => void;
};

type LayoutStore = LayoutStoreState & LayoutStoreAction;

export const useLayoutStore = createWithEqualityFn<LayoutStore>(
  (set) => ({
    ...INITIAL_LAYOUT_STATE,
    setCollapsed: (collapsed) => set({ collapsed }),
    setIsMobileMenuOpen: (isMobileMenuOpen) => set({ isMobileMenuOpen }),
    reset: () => set(INITIAL_LAYOUT_STATE),
  }),
  shallow
);
