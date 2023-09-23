// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(@remix-run/(.*)$)|^(@remix-run$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^~/types",
    "^~/configs",
    "^~/libs",
    "^~/hooks",
    "^~/components",
    "^~/registry",
    "^~/styles",
    "^~/data",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
}
