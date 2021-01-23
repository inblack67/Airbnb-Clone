declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    CLIENT_URL: string;
    NODE_ENV: string;
    SESSION_SECRET: string;
    DOMAIN: string;
  }
}
