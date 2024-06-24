import { extname } from 'node:path';

export function testVueAndApp(id = '') {
  const _extname = extname(id);

  return !(_extname !== '.vue' || id.includes('App.vue'));
}

export function testVue(id = '') {
  const _extname = extname(id);

  return !(_extname !== '.vue');
}
