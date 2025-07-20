declare global {
  interface Window {
    API_ENDPOINT?: string;
  }
}

export const getApiEndpoint = () => {
  return typeof window === "undefined"
    ? process.env.API_ENDPOINT
    : window.API_ENDPOINT;
};
