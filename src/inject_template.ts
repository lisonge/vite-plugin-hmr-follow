// use import.meta['url'] instead of import.meta.url, because vite will replace import.meta.url to file system path

export const importMetaUrlProtocol = `((()=>{const u = new URL(import.meta['url']);return u.protocol;})())`;

export const importMetaWsProtocol = `((()=>{const u = new URL(import.meta['url']);return u.protocol === 'https:' ? 'wss' : 'ws';})())`;

export const importMetaHostName = `((()=>{const u = new URL(import.meta['url']);return u.hostname})())`;

export const importMetaPort = `((()=>{const u = new URL(import.meta['url']);return (u.port || (u.protocol === 'https:' ? '443' : '80'))})())`;

export const importMetaBase = `((()=>{const b = __BASE__; const u = new URL(import.meta['url']); return (u.origin+b);})())`;
