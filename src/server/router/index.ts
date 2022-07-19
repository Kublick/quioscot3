// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { exampleRouter } from './example';
import { categoriasRouter } from './categorias';

export const appRouter = createRouter()
	.transformer(superjson)
	.merge('example.', exampleRouter)
	.merge('categoria.', categoriasRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
