import { createRouter } from './context';
import { z } from 'zod';
import { categoriaValidation } from '../../interfaces/categorias';

export const categoriasRouter = createRouter().query('getCategorias', {
	async resolve({ ctx }) {
		return await ctx.prisma.categoria.findMany({
			include: {
				productos: true,
			},
		});
	},
});
