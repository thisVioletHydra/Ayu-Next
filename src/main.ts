import { start } from './logic';

(async () => {
  try {
    await start();
    console.log('✅', 'done');
  } catch (error) {
    console.log(`❌`, `<${typeof error}>`, error);
  }
})().catch((error: Error) => {
  console.log(`[LOG] error`, `<${typeof error}>`, error);
});