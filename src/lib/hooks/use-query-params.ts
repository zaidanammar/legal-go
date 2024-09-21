import { useSearchParams } from 'react-router-dom';

import { type Primitives } from '@/lib/models/primitives';

type HandleUpdateSearchParamsOptions = {
  replace?: boolean;
};

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleUpdateSearchParams = (
    changes: Record<string, Primitives>,
    options?: HandleUpdateSearchParamsOptions
  ) => {
    setSearchParams((params) => {
      if (options?.replace) {
        params = new URLSearchParams();
      }
      Object.entries(changes).forEach(([key, value]) => {
        if (!value) {
          params.delete(key);
          return;
        }
        params.set(key, encodeURIComponent(value));
      });
      return params;
    });
  };

  const getSearchParamsValue = (key: string): string | undefined => {
    return decodeURIComponent(searchParams.get(key) || '') || undefined;
  };

  const clearSearchParams = () => {
    setSearchParams((params) => {
      params = new URLSearchParams();
      return params;
    });
  };

  return {
    searchParams,
    handleUpdateSearchParams,
    getSearchParamsValue,
    clearSearchParams,
  };
};
