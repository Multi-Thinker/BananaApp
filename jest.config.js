module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['tsx', 'ts', 'jsx', 'js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons|react-native|my-project|react-native-button|react-native-table-component)/)',
  ],
  testMatch: ['**/__tests__/**/*.test.tsx'],
};
