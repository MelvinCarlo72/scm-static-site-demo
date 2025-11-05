import js from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    ignores: ["dist", "node_modules"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    ...js.configs.recommended,
    rules: {
      semi: ["error", "always"],
      "no-unused-vars": ["warn", { "vars": "all", "args": "after-used" }]
    }
  }
];
