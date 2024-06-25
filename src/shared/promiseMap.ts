export async function promiseMap(list: [string, unknown][]): Promise<Map<string, unknown>> {
  return Promise.resolve(new Map([...list]));
}