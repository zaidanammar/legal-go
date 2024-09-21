export const accessMenuKeys = [
  // Setup
  'SETUP-ACCOUNT',
  'SETUP-ACCOUNT_UPSERT',
  'SETUP-ACCOUNT_DETAIL',
  'SETUP-ROLE',
  'SETUP-ROLE_UPSERT',
  'SETUP-ROLE_DETAIL',
  'SETUP-CALENDAR',
  'SETUP-APPROVAL',

  // Payment
  'PAYMENT-HISTORY',
] as const;

export type AccessMenuKey = (typeof accessMenuKeys)[number];
export type PartialAccessMenuMap = {
  [Key in AccessMenuKey]?: boolean;
};
