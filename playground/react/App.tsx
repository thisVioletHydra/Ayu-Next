// @ts-nocheck — visual sample only
import { useMemo, useState, type ReactElement } from 'react';

type Tone = 'primary' | 'muted';

const tones: Record<Tone, string> = {
  primary: '#FFCC66',
  muted: '#707A8C',
};

export function App(): ReactElement {
  const [tone, setTone] = useState<Tone>('primary');
  const accent = useMemo(() => tones[tone], [tone]);

  return (
    <section data-tone={tone} style={{ background: '#1F2430', color: '#CBCCC6' }}>
      <h1>Ayu Next</h1>
      <p>
        Accent <code style={{ color: accent }}>{accent}</code>
      </p>
      <button type="button" onClick={() => setTone(tone === 'primary' ? 'muted' : 'primary')}>
        Toggle tone
      </button>
    </section>
  );
}

export default App;
