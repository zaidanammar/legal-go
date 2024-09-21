import { checkIsDynamicImportOrChunkLoadError } from '@/lib/components/error-boundary-wrapper/utils';
import { isDevEnvironment } from '@/lib/constants/env';

export const handleCatchBoundaryError = (
  error: Error,
  errorInfo: React.ErrorInfo
) => {
  if (isDevEnvironment) {
    console.error('Error Info:', { error, errorInfo });
  }

  if (checkIsDynamicImportOrChunkLoadError(error)) {
    return;
  }
};
