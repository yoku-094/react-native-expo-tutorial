import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import expoConfig from "eslint-config-expo/flat.js";

export default [
  // Expo が提供する Flat Config 用の共有設定の読込み
  ...expoConfig,
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
      // parser: require("@typescript-eslint/parser"),
      parser: tsParser,
    },
    // ルールの追加・上書き
    // チュートリアル通りに "import type" を推奨するルールを有効化
    rules: {
      "@typescript-eslint/consistent-type-imports": ["warn"],
    },
  },
];
