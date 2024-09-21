export type UseGetCurrentUserDetailParams = {
  isReady?: boolean;
};

export type GetCurrentUserDetailResponseData = {
  email: string;
  phone_number: string;
  full_name: string;
  user_id: string;
  user_type_id: string;
  user_type_name: string;
};
