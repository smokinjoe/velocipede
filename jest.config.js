export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)?$": [
      "ts-jest",
      {
        diagnostics: { ignoreCodes: ["TS151001"] },
        tsconfig: "tsconfig.test.json",
      },
    ],
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/common/(.*)$": "<rootDir>/src/common/$1",
    "^@/client/(.*)$": "<rootDir>/src/client/$1",
    "^@/server/(.*)$": "<rootDir>/src/server/$1",
    // Add more aliases as needed
  },
};
