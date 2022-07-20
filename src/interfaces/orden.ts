import { z } from 'zod';
import { pedidoValidation } from './pedido';

export const ordenValidation = z.object({
	nombre: z.string(),
	pedido: z.array(pedidoValidation),
	total: z.number(),
});

export type IOrden = z.infer<typeof ordenValidation>;
