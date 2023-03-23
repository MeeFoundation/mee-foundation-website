module.exports = {
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss', // MUST come last
  ],
  pluginSearchDirs: false,
};
