import create from 'zustand';
import { ICategoria } from '../interfaces/categorias';
import { IPedido } from '../interfaces/pedido';
import { IProducto } from '../interfaces/producto';
import { toast } from 'react-toastify';

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
	handleEditarCantidades: (id: number) => void;
	handleEliminarProducto: (id: number) => void;
	nombre: string;
	setNombre: (nombre: string) => void;
	total: number;
	setTotal: (total: number) => void;
	resetState: () => void;
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
			toast.success('Pedido actualizado');
		} else {
			set((state) => ({
				...state,
				pedido: [...state.pedido, pedido],
			}));
			toast.success('Producto agregado al pedido');
		}
	},
	handleEditarCantidades: (id: number) => {
		const productoActualizar = get().pedido.filter((p) => p.id === id);
		get().setProducto(productoActualizar[0] as any);
		get().setModal(true);
	},
	handleEliminarProducto: (id: number) => {
		console.log(id);
		const pedidoActualizado = get().pedido.filter((p) => p.id !== id);
		set((state) => ({
			...state,
			pedido: pedidoActualizado,
		}));
	},
	nombre: '',
	setNombre: (nombre: string) =>
		set((state) => ({
			...state,
			nombre,
		})),
	total: 0,
	setTotal: (total: number) =>
		set((state) => ({
			...state,
			total,
		})),
	resetState: () => {
		set((state) => ({
			...state,
			categoriaActual: get().categorias[0],
			producto: null,
			pedido: [],
			nombre: '',
			total: 0,
		}));
	},
}));
