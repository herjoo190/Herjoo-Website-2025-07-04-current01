// uno.config.js
const { defineConfig, presetUno, presetAttributify } = require('unocss');

module.exports = defineConfig({
  // This is the most important part!
  // It tells UnoCSS to scan all your HTML files for classes.
  content: {
    filesystem: [
      '**/*.html',
    ],
  },
  presets: [
    presetUno(),
    presetAttributify(),
  ],
});
