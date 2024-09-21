/* eslint-disable @typescript-eslint/consistent-type-definitions */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEPLOY_CONTEXT:
    | 'local'
    | 'development'
    | 'staging'
    | 'production';
  readonly VITE_API_BASE_URL: string;
  readonly VITE_IN_MAINTENANCE_MODE: string;
  readonly VITE_STATIC_AUTH_API_KEY: string;

  /** Site Config related */
  readonly VITE_COMPANY_NAME: string;
  readonly VITE_COPYRIGHT_NAME: string;
  readonly VITE_FAVICON_URL: string;
  readonly VITE_LOGO_URL: string;

  /** Auth related */
  readonly VITE_AUTH_COOKIE_KEY: string;
  readonly VITE_LOGIN_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
