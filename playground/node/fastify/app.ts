// @ts-nocheck — visual sample only
import Fastify, {
  type FastifyInstance,
  type FastifyReply,
  type FastifyRequest,
} from 'fastify';

interface ThemeQuery {
  id?: string;
}

interface CreateTokenBody {
  role: string;
  hex: string;
}

const app: FastifyInstance = Fastify({
  logger: {
    level: 'info',
  },
});

app.addHook('onRequest', async (request) => {
  request.log.debug({ url: request.url }, 'incoming');
});

app.get('/health', async () => {
  return { ok: true as const, runtime: 'fastify' };
});

app.get<{ Querystring: ThemeQuery }>('/theme', async (request, reply) => {
  const id = request.query.id ?? 'ayu-next';
  if (id !== 'ayu-next' && id !== 'mirage') {
    return reply.code(404).send({ error: `Unknown theme: ${id}` });
  }
  return {
    id,
    accent: '#FFCC66',
    fg: '#CBCCC6',
    bg: '#1F2430',
  };
});

app.post<{ Body: CreateTokenBody }>('/tokens', async (request: FastifyRequest<{ Body: CreateTokenBody }>, reply: FastifyReply) => {
  const { role, hex } = request.body;
  if (!role.startsWith('accent.') && !role.startsWith('bg.')) {
    return reply.code(422).send({ error: 'role must be accent.* or bg.*' });
  }
  return reply.code(201).send({
    role,
    hex,
    createdAt: new Date().toISOString(),
  });
});

app.setErrorHandler((error, _request, reply) => {
  app.log.error(error);
  reply.code(500).send({ error: error.message });
});

async function main(): Promise<void> {
  const port = Number(process.env.PORT ?? 3000);
  await app.listen({ port, host: '0.0.0.0' });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

export { app };
