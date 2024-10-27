import React from 'react';

import { useGetCurrentUserDetail } from '@/lib/services/api/user-services/current-user/get-detail';
import { useAuth } from '@/lib/stores/auth';
import { useUserStore } from '@/lib/stores/user';

// const mapAccessMenuKeys: Record<Role, PartialAccessMenuMap> = {
//   watcher: {
//     DASHBOARD: true,
//     VERIFICATOR_LIST: true,
//     DELEGATOR_DETAIL: true,
//     DELEGATOR_LIST: true,
//   },
//   verifier: {
//     DELEGATOR_LIST: true,
//     DELEGATOR_DETAIL: true,
//     DELEGATOR_APPROVAL: true,
//   },
//   delegate: {
//     DELEGATOR_SUBMIT: true,
//   },
// };

export const useInitializeUserStore = () => {
  const { token } = useAuth();
  const { setUserDetail } = useUserStore();

  const { response: currentUserData, isLoading: isLoadingUserDetail } =
    useGetCurrentUserDetail({
      isReady: !!token,
    });

  // const storeAccessMenuEntries = React.useCallback(() => {
  //   if (!currentUserData) {
  //     return;
  //   }
  //   // setAccessMenu(mapAccessMenuKeys[currentUserData.role as Role]);
  // }, [currentUserData, setAccessMenu]);

  const storeUserDetail = React.useCallback(() => {
    if (!currentUserData) {
      return;
    }
    setUserDetail(currentUserData);
  }, [currentUserData, setUserDetail]);

  // React.useEffect(storeAccessMenuEntries, [storeAccessMenuEntries]);
  React.useEffect(storeUserDetail, [storeUserDetail]);

  const isLoading = isLoadingUserDetail;

  return {
    isLoading,
  };
};
