import { z } from 'zod';

export const productoValidation = z.object({
	id: z.number(),
	nombre: z.string(),
	precio: z.number(),
	imagen: z.string(),
	categoriaId: z.number(),
});

export type IProducto = z.infer<typeof productoValidation>;
