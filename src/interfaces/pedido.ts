import { z } from 'zod';

export const pedidoValidation = z.object({
	id: z.number(),
	nombre: z.string(),
	precio: z.number(),
	cantidad: z.number(),
	imagen: z.string(),
});

export type IPedido = z.infer<typeof pedidoValidation>;
