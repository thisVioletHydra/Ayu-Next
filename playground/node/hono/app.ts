// @ts-nocheck — visual sample only
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { HTTPException } from 'hono/http-exception';
import { logger } from 'hono/logger';

type ThemeId = 'ayu-next' | 'mirage';

interface Env {
  Variables: {
    requestId: string;
  };
}

const app = new Hono<Env>();

app.use('*', logger());
app.use('/api/*', cors({ origin: ['https://ayu.next'], allowMethods: ['GET', 'POST'] }));

app.use('*', async (c, next) => {
  c.set('requestId', crypto.randomUUID());
  await next();
});

app.get('/health', c => c.json({ ok: true, edge: true as const }));

app.get('/api/themes/:id', (c) => {
  const id = c.req.param('id') as ThemeId;
  if (id !== 'ayu-next' && id !== 'mirage') {
    throw new HTTPException(404, { message: `Unknown theme: ${id}` });
  }

  return c.json({
    id,
    requestId: c.get('requestId'),
    palette: {
      bg: '#1F2430',
      fg: '#CBCCC6',
      accent: '#FFCC66',
    },
  });
});

app.post('/api/tokens', async (c) => {
  const body = await c.req.json<{ role?: string, hex?: string }>();
  if (typeof body.role !== 'string' || typeof body.hex !== 'string') {
    return c.json({ error: 'role and hex required' }, 400);
  }

  return c.json(
    {
      role: body.role,
      hex: body.hex,
      requestId: c.get('requestId'),
      createdAt: new Date().toISOString(),
    },
    201,
  );
});

app.onError((error, c) => {
  if (error instanceof HTTPException) {
    return error.getResponse();
  }
  console.error('[hono]', error);
  return c.json({ error: 'Internal error' }, 500);
});

export default app;
export type { ThemeId, Env };
