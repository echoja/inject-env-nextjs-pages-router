declare global {
  interface Window {
    API_ENDPOINT?: string;
  }
}

export const getApiEndpoint = () => {
  return typeof window === "undefined"
    ? process.env.API_ENDPOINT || "development"
    : window.API_ENDPOINT || "development";
};
