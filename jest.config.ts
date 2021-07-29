import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  roots: ["<rootDir>/src"],
  modulePaths: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "\\.(jpg|woff|woff2)$": "<rootDir>/jest/file-mock.ts",
  },
  testMatch: ["**/?(*.)spec.tsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

export default config;
