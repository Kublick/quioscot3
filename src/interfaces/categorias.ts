import { z } from 'zod';

export const categoriaValidation = z.object({
	id: z.number(),
	nombre: z.string(),
	icono: z.string(),
});

export type ICategoria = z.infer<typeof categoriaValidation>;
