import create from 'zustand';
import { ICategoria } from '../interfaces/categorias';
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
};

export const quioscoContext = create<IQuiosco>((set) => ({
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
}));
