// @ts-nocheck — visual sample only
import { useState } from 'react';

/** JSX sample — classic React component shape. */
export function Badge({ label }) {
  const [hot, setHot] = useState(false);

  return (
    <button
      type="button"
      className={hot ? 'badge badge--hot' : 'badge'}
      onClick={() => setHot(value => !value)}
    >
      {label}
    </button>
  );
}

export default Badge;
