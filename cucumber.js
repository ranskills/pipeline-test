const defaultProfile = [
    'test/e2e/features/**/*.feature',
    '--require test/e2e/test.setup.js',
    '--require test/e2e/**/*.ts',
    '--format progress',
    '--publish-quiet',
].join(' ')

module.exports = {
    default: defaultProfile
}