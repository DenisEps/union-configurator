// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:@typescript-eslint/recommended',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 12,
//     sourceType: 'module',
//   },
//   plugins: ['react', 'react-hooks'],
//   rules: {
//     'react/jsx-uses-react': 'error',
//     'react/jsx-uses-vars': 'error',
//     'react/react-in-jsx-scope': 0,
//     '@typescript-eslint/no-empty-interface': 0,
//     'no-empty-pattern': 0,
//     'prettier/prettier': 0,
//   },
// };
module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ['react', 'react-hooks'], // added 'react'
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'prettier/prettier': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'react/react-in-jsx-scope': 'off',
    'react/no-find-dom-node': 0,
  },
};
