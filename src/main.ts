import { start } from './logic';

export async function ready() {
  try {
    await start();
    console.success('✅', 'done');
  } catch (error) {
    console.log(`❌`, `<${typeof error}>`, error);
  }
}