export type SubmitSignupRequest = {
  email: string;
  name: string;
  password: string;
  confirm_password: string;
  whatsapp_number: string;
  lead_channels: string;
  client_type: string;
};

export type SubmitSignupResponseData = {
  token: string;
  name: string;
  role_id: string;
};
