import { createRouter } from './context';
import { z } from 'zod';

export const productosRouter = createRouter().query('getProductos', {
	async resolve({ ctx }) {
		return await ctx.prisma.producto.findMany();
	},
});
