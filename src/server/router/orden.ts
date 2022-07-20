import { createRouter } from './context';
import { ordenValidation } from '../../interfaces/orden';

export const ordenRouter = createRouter().mutation('createOrden', {
	input: ordenValidation,
	async resolve({ input, ctx }) {
		return await ctx.prisma.orden.create({
			data: {
				...input,
				fecha: Date.now().toString(),
			},
		});
	},
});
