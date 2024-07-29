import type { LogType } from 'consola';

import consola from 'consola';

import { ready } from './main';

type MyNewType = {
  [key in LogType]: (message?: unknown, ...optionalParameters: unknown[]) => void
};

// Augment the console object with the new type
declare global {
  interface Console extends MyNewType {}
}

consola.wrapAll();
await ready();