const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "benton-notes-app",
  },
  apiGateway: {
    URL: "https://tqj38ik1ja.execute-api.us-east-1.amazonaws.com/prod",
    REGION: "us-east-1",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Gi2giA5P1",
    APP_CLIENT_ID: "4s8rbdi7gpbud5n2hkarosfgs0",
    IDENTITY_POOL_ID: "us-east-1:8f54444a-730f-4a89-9029-37e39db3ae9a",
  },
};

export default config;
