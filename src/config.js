const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "benton-notes-app",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://tqj38ik1ja.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Gi2giA5P1",
    APP_CLIENT_ID: "4s8rbdi7gpbud5n2hkarosfgs0",
    IDENTITY_POOL_ID: "us-east-1:c7f82e5b-ebda-4f97-ae4e-6b1be888c418",
  },
};

export default config;
