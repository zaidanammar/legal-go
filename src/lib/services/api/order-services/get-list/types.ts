import { type PaginatedRequest } from '@/lib/models/api/base-request';
import { type APIListResponseData } from '@/lib/models/api/base-response';

export type UseGetOrderListParams = {
  isReady?: boolean;
  queryParams?: GetOrderListParams;
};

export type GetOrderListParams = PaginatedRequest & {
  case_code?: string;
  case_name?: string;
  status?: string;
};

type OrderClient = {
  client_id: string;
  client_name: string;
};

export type OrderEntry = {
  order_id: string;
  case_code: string;
  client: OrderClient;
  case_name: string;
  category: string;
  status: string;
};

export type GetOrderListResponseData = APIListResponseData<OrderEntry>;
