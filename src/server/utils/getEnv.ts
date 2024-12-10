export const getEnv = () => {
  const env = process.env.NODE_ENV;

  if (env === undefined) {
    return "local";
  }

  return env;
};
