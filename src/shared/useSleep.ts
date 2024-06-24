/**
 * Asynchronous timeout
 * @param ms time number
 * @returns Promise<number>
 */
export async function useSleep(ms: number): Promise<number> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}