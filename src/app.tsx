import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';

import { ErrorBoundaryWrapper } from '@/lib/components/error-boundary-wrapper';
import { RootLayout } from '@/lib/layout';
import { AppWatermark } from '@/lib/layout/app-watermark';
import { Meta } from '@/lib/layout/meta';
import { LayoutProviders } from '@/lib/providers/layout-providers';
import { Routings } from '@/lib/router/routings';
import { handleCatchBoundaryError } from '@/lib/utils/error';

export const App = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorBoundaryWrapper}
      onError={handleCatchBoundaryError}
    >
      <Meta />
      <LayoutProviders>
        <AppWatermark hideWatermark>
          <Router>
            <RootLayout>
              <Routings />
            </RootLayout>
          </Router>
        </AppWatermark>
      </LayoutProviders>
    </ErrorBoundary>
  );
};
