module.exports = {
  plugins: ['prettier'],
  extends: [
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-prettier/kdu')
  ],
  rules: {
    'prettier/prettier': 'warn'
  }
}
