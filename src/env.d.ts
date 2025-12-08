/* eslint-disable @typescript-eslint/no-explicit-any */

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
      VUE_ROUTER_BASE: string | undefined;
      SERVER?: boolean;
    }
  }

  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
