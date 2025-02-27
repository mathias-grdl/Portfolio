const nextJest = require("next/jest");

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: "./",
});

// Add any custom config to be passed to Jest
const config = {
	coverageProvider: "v8",
	testEnvironment: "jsdom",
	preset: "ts-jest",
	// Add more setup options before each test is run
	setupFilesAfterEnv: ["./jest.setup.js"], // Ensure this line is present
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
