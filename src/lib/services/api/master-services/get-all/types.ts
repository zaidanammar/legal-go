export type MasterDataEntry = {
  case_categories: Array<MasterDataListEntry>;
  case_statuses: Array<MasterDataListEntry>;
  client_types: Array<MasterDataListEntry>;
  lead_channels: Array<MasterDataListEntry>;
  payment_methods: Array<MasterDataListEntry>;
  submission_statuses: Array<MasterDataListEntry>;
  user_statuses: Array<MasterDataListEntry>;
  user_types: Array<MasterDataListEntry>;
};

export type MasterDataListEntry = {
  key: string;
  value: string;
};

export type GetMasterDataListResponseData = MasterDataEntry;
