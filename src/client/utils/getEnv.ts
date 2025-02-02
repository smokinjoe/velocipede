export const getBaseUrl = () => {
  const baseURL = import.meta.env.VITE_INTERNAL_API_BASEURL;
  return baseURL;
};
