import type { NextConfig } from "next";

import { getApiEndpoint } from "./lib/config";
import { writeFileSync } from "node:fs";
import { join } from "node:path";


  // NODE_ENV: 'production',
  // NEXT_RUNTIME: 'nodejs',
  // RUST_MIN_STACK: '8388608',
  // NEXT_PRIVATE_BUILD_WORKER: '1',
  // IS_NEXT_WORKER: 'true',
  // npm_config_noproxy: '',
  // NEXT_DEPLOYMENT_ID: '',
  // NODE_OPTIONS: ''
const envFilePath = join(process.cwd(), "public", "env.js");
writeFileSync(
  envFilePath,
  `window.API_ENDPOINT = "${getApiEndpoint()}";\n`,
  "utf8"
);
console.log("Environment file created at:", envFilePath);

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
