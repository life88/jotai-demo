module.exports = {
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
  proseWrap: 'never',
  importOrder: ['^@/(.*)$', '^[./]'],
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
};
