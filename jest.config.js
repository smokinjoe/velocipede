const config = {
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)?$": [
      "ts-jest",
      { diagnostics: { ignoreCodes: ["TS151001"] } },
    ],
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleDirectories: ["node_modules", "./src/"],
  moduleNameMapper: {
    "^@/common/(.*)$": "<rootDir>/src/common/$1",
    "^@/client/(.*)$": "<rootDir>/src/client/$1",
  },
};

export default config;
