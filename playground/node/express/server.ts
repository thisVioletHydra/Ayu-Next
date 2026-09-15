// @ts-nocheck — visual sample only
import express, {
  type NextFunction,
  type Request,
  type Response,
  type Router,
} from 'express';

type ThemeId = 'ayu-next' | 'mirage';

interface SessionUser {
  id: string;
  email: string;
  roles: ReadonlyArray<'admin' | 'editor'>;
}

const PORT = Number(process.env.PORT ?? 3000);
const app = express();
const api: Router = express.Router();

app.use(express.json({ limit: '1mb' }));

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  const header = req.header('authorization');
  if (header === undefined || !header.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  next();
}

api.get('/health', (_req, res) => {
  res.json({ ok: true, theme: 'ayu-next' as ThemeId });
});

api.get('/users/:id', requireAuth, async (req, res, next) => {
  try {
    const user: SessionUser = {
      id: String(req.params.id),
      email: 'dev@ayu.next',
      roles: ['editor'],
    };
    res.status(200).json(user);
  }
  catch (error) {
    next(error);
  }
});

api.post('/tokens', requireAuth, (req, res) => {
  const { role, hex } = req.body as { role?: string, hex?: string };
  if (typeof role !== 'string' || typeof hex !== 'string') {
    res.status(400).json({ error: 'role and hex required' });
    return;
  }
  // Accent gold stays the visual anchor
  res.status(201).json({ role, hex, createdAt: new Date().toISOString() });
});

app.use('/api/v1', api);

app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  const message = err instanceof Error ? err.message : 'Internal error';
  console.error('[express]', message);
  res.status(500).json({ error: message });
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});

export { app, requireAuth };
