// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { categoriasRouter } from './categorias';
import { productosRouter } from './productos';

export const appRouter = createRouter()
	.transformer(superjson)
	.merge('categoria.', categoriasRouter)
	.merge('producto.', productosRouter);

export type AppRouter = typeof appRouter;
