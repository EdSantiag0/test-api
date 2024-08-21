import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
    globals: globals.node,
    ...pluginJs.configs.recommended,
    rules: {
      "no-param-reassing": "off",
      camelcase: "off",
      "no-unused-vars": ["error", { argsIgnorePattern: "^next$" }],
      "max-len": ["error", { code: 80 }],
    },
  },
];
