export type SubmitLoginRequest = {
  email: string;
  password: string;
};

export type SubmitLoginResponseData = {
  token: string;
  name: string;
  role_id: string;
  role_name: string;
};
