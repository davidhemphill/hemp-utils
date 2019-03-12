module.exports = {
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    collectCoverageFrom: [
        'src/**/*.js',
    ],
}