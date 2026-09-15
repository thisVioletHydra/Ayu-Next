// @ts-nocheck — visual sample only
type Hex = `#${string}`;

interface TokenRow {
  role: string;
  hex: Hex;
  desc?: string;
}

enum Surface {
  Base = 'bg.base',
  Raised = 'bg.raised',
  Sunken = 'bg.sunken',
}

const catalog: ReadonlyArray<TokenRow> = [
  { role: Surface.Base, hex: '#1F2430', desc: 'Default canvas' },
  { role: 'accent.default', hex: '#FFCC66' },
];

function pick<T extends TokenRow>(rows: readonly T[], role: string): T | undefined {
  return rows.find(row => row.role === role);
}

async function paint(role: string): Promise<Hex> {
  const row = pick(catalog, role);
  if (row === undefined) {
    throw new Error(`Unknown role: ${role}`);
  }
  return row.hex;
}

export type { Hex, TokenRow };
export { Surface, pick, paint };
