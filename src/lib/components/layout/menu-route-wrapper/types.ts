import { type RouteProps } from 'react-router-dom';

type PageRoute = Pick<RouteProps, 'path' | 'element'> & {
  /** TODO: update type to conform with service convention */
  accessKey?: string;
};

export type PageRoutes = Array<PageRoute>;
