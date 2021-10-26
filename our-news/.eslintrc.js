module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'semi': [2, 'never'],
    'comma-dangle': [2, 'never'],
    'jsx-quotes': [2, 'prefer-single'],
    'prettier/prettier': 0
  }
}
