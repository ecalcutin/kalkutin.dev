import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  roots: ["<rootDir>/src"],
  modulePaths: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
  testMatch: ["**/?(*.)spec.tsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

export default config;
