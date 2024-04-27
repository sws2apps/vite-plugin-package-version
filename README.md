# Vite Plugin to Display Package Version

DISCLAIMER: As the original package from [smnhgn/vite-plugin-package-version](https://github.com/smnhgn/vite-plugin-package-version) now supports ESM, we will be soon deprecating this package.

Load package version of your package.json into your [vite](https://github.com/vitejs/vite) environment.

Will inject `import.meta.env.PACKAGE_VERSION` with the version specified in your package.json.

## Installation

```
npm i @sws2apps/vite-plugin-package-version
```

## Usage

```js
// vite.config.js
import { defineConfig } from 'vite';
import { loadVersion } from '@sws2apps/vite-plugin-package-version';

export default defineConfig({
  plugins: [loadVersion()],
});
```

## Note

This repo is taken from [vite-plugin-package-version](https://github.com/smnhgn/vite-plugin-package-version) by Simon Haugen with only some minor edits. Thanks to Simon for the original repo.
