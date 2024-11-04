export type UseGetDashboardSummaryParams = {
  isReady?: boolean;
  queryParams?: GetDashboardSummaryQueryParams;
};

export type GetDashboardSummaryQueryParams = {
  start_date?: string;
  end_date?: string;
};

export type GetDashboardSummaryResponseData = {
  account_receivables: number;
  top_5_cases: Array<Top5Case>;
  total_order_client: TotalCustomers;
  total_transaction: number;
  total_visitors: number;
};

export type Top5Case = {
  category: string;
  value: number;
};

export type TotalCustomers = {
  company_customer: number;
  individual_customer: number;
  total_customer: number;
};
