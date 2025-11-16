// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const tsPlugin = require("@typescript-eslint/eslint-plugin");

module.exports = defineConfig([
  // Expo が提供する Flat Config 用の共有設定の読込み
  expoConfig,
  {
    ignores: ["dist/*"],
    // TypeScript ESLint プラグインの明示的読込み
    // Flat Config では plugins はオブジェクト形式で渡す必要があるらしい
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    // TypeScript 用のパーサーを指定
    // TypeScript の構文を ESLint が正しく解析できるようにするため
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
    },
    // ルールの追加・上書き
    // チュートリアル通りに "import type" を推奨するルールを有効化
    rules: {
      "@typescript-eslint/consistent-type-imports": ["warn"],
    },
  },
]);
