import { Spin } from 'antd';
import React from 'react';
import { useInView } from 'react-intersection-observer';

type LazyLoadIntersectionWrapperProps = React.PropsWithChildren<{
  fallback?: React.ReactNode;
}>;

/**
 * @note this component will be less optimized on tabs children,
 * use this wisely on pages with various independent components
 * and over the screen content
 */
export const LazyLoadIntersectionWrapper = ({
  fallback,
  children,
}: LazyLoadIntersectionWrapperProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <React.Suspense fallback={fallback || <Spin tip="Mohon Tunggu..." />}>
        {inView ? children : fallback}
      </React.Suspense>
    </div>
  );
};
