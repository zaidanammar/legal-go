export type SubmitLoginRequest = {
  username: string;
  password: string;
};

export type UserDetail = {
  user_id: string;
};

export type UserType = 'CORPORATE' | 'INDIVIDUAL';

export type SubmitLoginResponseData = {
  token: string;
  email: string;
  phone_number: string;
  user_type: string;
  user_detail: UserDetail;
  user_type_id: string;
};
