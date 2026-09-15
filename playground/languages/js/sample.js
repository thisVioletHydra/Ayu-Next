'use strict';

// @ts-nocheck — visual sample only
const ACCENT = '#FFCC66';

/**
 * Tiny sample for JS token colors.
 * @param {string} name
 * @returns {string}
 */
function greet(name = 'world') {
  const message = `Hello, ${name}!`;
  console.log(message, { accent: ACCENT });
  return message;
}

async function loadConfig(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error('loadConfig failed', error);
    return null;
  }
}

class ThemeProbe {
  #enabled = true;

  constructor(label) {
    this.label = label;
  }

  toggle() {
    this.#enabled = !this.#enabled;
    return this.#enabled;
  }
}

export { greet, loadConfig, ThemeProbe };
