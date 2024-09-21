import { Grid } from 'antd';

const { useBreakpoint } = Grid;

export const useBreakpointValue = () => {
  const screens = useBreakpoint();
  const breakPoints = Object.entries(screens).filter(
    ([, passBreakPoint]) => passBreakPoint
  );
  const isMobile = !breakPoints.find((item) => item[0] === 'lg');

  return { isMobile };
};
