module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: 2018,
      sourceType: "module",
      project: "./tsconfig.json"
    },
    ignorePatterns: [".eslintrc.js", "**/*.config.js", "**/*.config.ts", "**/*.config.lib.ts"],
    plugins: ["react", "react-hooks", "@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "airbnb",
        "airbnb/hooks",
        "airbnb-typescript",
    ],
    settings: {
      react: { version: "detect" }
    },
    rules: {
      "max-len": [
          "error",
          { "code": 120, "ignoreComments": true, "ignoreStrings": true }
      ],
        "react/prop-types": 0,
        "react/function-component-definition": [2, {
          "namedComponents": "arrow-function",
          "unnamedComponents": "function-expression",
        }],
        "import/prefer-default-export": 0,
        "react/react-in-jsx-scope": 0,
        "react/jsx-props-no-spreading": "off",
        "react/require-default-props": "off",
    }
  };