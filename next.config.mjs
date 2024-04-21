/** @type {import('next').NextConfig} */

import { config as dotenvConfig } from "dotenv";
dotenvConfig();

const nextConfig = {
	output: "export",
	trailingSlash: true,
	images: {
		unoptimized: true,
		domains: ["pictawave.com", "mathias-grondziel.com"],
	},
	env: {
		SERVICE_ID: process.env.SERVICE_ID,
		TEMPLATE_ID: process.env.TEMPLATE_ID,
		PUBLIC_KEY: process.env.PUBLIC_KEY,
	},
};

export default nextConfig;
