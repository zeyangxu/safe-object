module.exports = {
  moduleFileExtensions: [
    "js",
    "json",
  ],
  transform: {
    "^.+\\.js$": "./node_modules/babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/test/cssStub.js"
  },
  // setupFiles: [
  //   "<rootDir>/test/setup.js"
  // ]
}