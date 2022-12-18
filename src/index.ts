import type { Plugin } from 'vite';

let envInjectionFailed = false;

export const loadVersion = (): Plugin => {
  return {
    name: '@sws2apps/vite-plugin-package-version',
    config: (_, env) => {
      if (env) {
        const key = 'import.meta.env.PACKAGE_VERSION';
        const val = JSON.stringify(process.env.npm_package_version);

        return { define: { [key]: val } };
      } else {
        envInjectionFailed = true;
      }
    },
    configResolved(config) {
      if (envInjectionFailed) {
        config.logger.warn(
          `[vite-plugin-package-version] import.meta.env.PACKAGE_VERSION was not injected due ` +
            `to incompatible vite version (requires vite@^4.0.0).`
        );
      }
    },
  };
};
