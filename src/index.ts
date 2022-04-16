import type { Plugin } from 'vite';
import {
  importMetaHostName,
  importMetaWsProtocol,
  importMetaPort,
  importMetaBase,
} from './inject_template';

export interface HmrFollowOption {
  /**
   * set base follow import.meta.url, if import.meta.url.origin deffer from location.origin, set true
   * @default false
   */
  base?: boolean;
}

export default (option?: HmrFollowOption): Plugin => {
  let isServe = false;
  return {
    name: 'hmr-follow',
    configResolved(resolvedConfig) {
      isServe = resolvedConfig.command == 'serve';
    },
    transform(code, id) {
      if (isServe && id.endsWith('node_modules/vite/dist/client/client.mjs')) {
        code = code
          .replace(/__HMR_PROTOCOL__/g, importMetaWsProtocol)
          .replace(/__HMR_HOSTNAME__/g, importMetaHostName)
          .replace(/__HMR_PORT__/g, importMetaPort);
        if (option?.base) {
          code = code.replace(/__BASE__/g, importMetaBase);
        }
      }
      return code;
    },
  };
};
