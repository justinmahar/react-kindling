/**
 * We use a JavaScript file for the .eslintrc file (instead of a JSON file) as it supports
 * comments that can be used to better describe rules.
 *
 * This config lints both JS and TS. For all other files, such as JSON, you can use Prettier and turn on
 * the auto format option in VS Code. You can select Prettier when running Format Document the first time.
 *
 * This config uses Prettier as an ESLint rule. The advantage of having prettier setup as an
 * ESLint rule using eslint-plugin-prettier is that JS and TS code can automatically be fixed using ESLint's --fix option.
 *
 * From the command line, type `npm run lint` to run ESLint manually. This script will run ESLint through all
 * the .js, .ts, .jsx and .tsx (used with React) files. Any ESLint errors that can be automatically fixed will
 * be fixed with this command, but any other errors will be printed out in the command line.
 *
 * ## Automatically Fix Code in VS Code
 *
 * For a good developer experience, it's useful to setup your editor to automatically run ESLint's automatic
 * fix command (i.e. eslint --fix) whenever a file is saved. Here is the VS Code config
 * required in the settings.json file in VS Code to get automatic fixing whenever saving a file:
 *
 * ```
 * {
 *   "editor.codeActionsOnSave": {
 *     "source.fixAll.eslint": true
 *   },
 * }
 * ```
 *
 * See the following post for more: https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
 */
module.exports = {
  // Below we use the overrides array to define separate linting options for both TS and JS.
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
      parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
          jsx: true, // Allows for the parsing of JSX
        },
      },
      extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:react-hooks/recommended', // Uses the recommended rules from @eslint-plugin-react-hooks
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      ],
      settings: {
        react: {
          version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
      },
      rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        'react/display-name': 'off', // Disable warning about display name
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
          jsx: true, // Allows for the parsing of JSX
        },
      },
      extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:react-hooks/recommended', // Uses the recommended rules from @eslint-plugin-react-hooks
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      ],
      settings: {
        react: {
          version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
      },
      rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        'react/prop-types': 'off', // Disable suggestion to add prop types
        'react/display-name': 'off', // Disable warning about display name
      },
    },
  ],
};
