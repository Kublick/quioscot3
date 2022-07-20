import create from 'zustand';
import { ICategoria } from '../interfaces/categorias';
import { IPedido } from '../interfaces/pedido';
import { IProducto } from '../interfaces/producto';

type IQuiosco = {
	categorias: ICategoria[];
	setCategorias: (categorias: ICategoria[]) => void;
	categoriaActual: ICategoria | null;
	setCategoriaActual: (categoriaActual: ICategoria | null) => void;
	producto: IProducto | null;
	setProducto: (producto: IProducto | null) => void;
	modal: boolean;
	setModal: (modal: boolean) => void;
	pedido: IPedido[];
	addPedido: (pedido: IPedido) => void;
};

export const quioscoContext = create<IQuiosco>((set, get) => ({
	categorias: [],
	categoriaActual: null,
	setCategorias: (categorias: ICategoria[]) =>
		set((state) => ({
			...state,
			categorias,
		})),
	setCategoriaActual: (categoriaActual: ICategoria | null) =>
		set((state) => ({
			...state,
			categoriaActual,
		})),
	producto: null,
	setProducto: (producto: IProducto | null) =>
		set((state) => ({
			...state,
			producto,
		})),
	modal: false,
	setModal: (modal: boolean) =>
		set((state) => ({
			...state,
			modal,
		})),
	pedido: [],
	addPedido: (pedido: IPedido) => {
		if (get().pedido.some((p) => p.id === pedido.id)) {
			const pedidoActualizado = get().pedido.map((p) => {
				if (p.id === pedido.id) {
					return {
						...p,
						cantidad: pedido.cantidad,
					};
				}
				return p;
			});
			set((state) => ({
				...state,
				pedido: pedidoActualizado,
			}));
		} else {
			set((state) => ({
				...state,
				pedido: [...state.pedido, pedido],
			}));
		}
	},
}));
