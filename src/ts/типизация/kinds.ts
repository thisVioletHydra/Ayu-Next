export type TypingPaint = {
  id: string;
  status: 'stub' | 'painted';
  semantic: Record<string, string>;
  textmate: Array<{
    scope: string[];
    settings: { foreground: string };
  }>;
};

export function stub(id: string): TypingPaint {
  return {
    id,
    status: 'stub',
    semantic: {},
    textmate: [],
  };
}
