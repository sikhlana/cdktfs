declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      BACKEND_S3_ACCESS_KEY: string | '';
      BACKEND_S3_BUCKET: string | '';
      BACKEND_S3_REGION: string | '';
      BACKEND_S3_SECRET_KEY: string | '';
      TFE_ORGANIZATION: string | '';
      // Add all the environment variables here...
    }
  }
}

export {};
