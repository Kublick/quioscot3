// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { categoriasRouter } from './categorias';
import { productosRouter } from './productos';
import { ordenRouter } from './orden';

export const appRouter = createRouter()
	.transformer(superjson)
	.merge('categoria.', categoriasRouter)
	.merge('producto.', productosRouter)
	.merge('orden.', ordenRouter);

export type AppRouter = typeof appRouter;
