import { findMyFile } from './logic';

(async () => {
  try {
    await findMyFile();
  } catch (error) {
    console.log(`❌`, `<${typeof error}>`, error);
  }
})().catch((error: Error) => {
  console.log(`[LOG] error`, `<${typeof error}>`, error);
});