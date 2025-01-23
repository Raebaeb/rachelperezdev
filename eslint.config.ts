import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintConfigReact from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  eslintConfigPrettier,
  eslintConfigReact.configs.flat["jsx-runtime"],
  tseslint.configs.strict
);
