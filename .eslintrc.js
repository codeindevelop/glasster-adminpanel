module.exports = {
  extends: ['react-app'],
  rules: {},
  overrides: [
    {
      files: ['**/*.js?(x)'],
      rules: {
        // ******** ignore rules for warnings *********
        'react/no-unescaped-entities': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
};
