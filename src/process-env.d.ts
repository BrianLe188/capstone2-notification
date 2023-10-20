declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      CLIENT_URL: string;
      MAILING_SERVICE_CLIENT_ID: string;
      MAILING_SERVICE_CLIENT_SECRET: string;
      MAILING_SERVICE_REFRESH_TOKEN: string;
      SENDER_EMAIL_ADDRESS: string;
      // add more environment variables and their types here
    }
  }
}
