declare global {
  interface Window {
    NODE_ENV?: string;
  }
}

export const getNodeEnv = () => {
  return typeof window === "undefined"
    ? process.env.NODE_ENV || "development"
    : window.NODE_ENV || "development";
};
