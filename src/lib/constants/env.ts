export const isDevMode = import.meta.env.MODE === 'development';
export const isProductionMode = import.meta.env.MODE === 'production';

export const deployContext = import.meta.env.VITE_DEPLOY_CONTEXT;

export const isDevEnvironment =
  ['local', 'development'].includes(deployContext) || isDevMode;
export const isProductionContext = deployContext === 'production';
export const isProduction = isProductionMode && isProductionContext;

export const isInMaintenanceMode =
  import.meta.env.VITE_IN_MAINTENANCE_MODE === 'true';
export const STATIC_AUTH_API_KEY =
  import.meta.env.VITE_STATIC_AUTH_API_KEY ?? '';
