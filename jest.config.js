module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "^.+\\.css$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["/node_modules/"],
  testEnvironment: "jsdom",
  verbose: true,
  modulePathIgnorePatterns: ["__mocks__"],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    "<rootDir>/pages/",
    "<rootDir>/src/shared/components/PokemonCardLoader",
  ],
  coverageReporters: ["json-summary", "text", "lcov"],
};
