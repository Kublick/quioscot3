import { z } from 'zod';
import { productoValidation } from './producto';

export const categoriaValidation = z.object({
	id: z.number(),
	nombre: z.string(),
	icono: z.string(),
	productos: z.array(productoValidation),
});

export type ICategoria = z.infer<typeof categoriaValidation>;
