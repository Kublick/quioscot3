import create from 'zustand';
import { ICategoria } from '../interfaces/categorias';

type IQuiosco = {
	categorias: ICategoria[];
	setCategorias: (categorias: ICategoria[]) => void;
	categoriaActual: ICategoria | null;
	setCategoriaActual: (categoriaActual: ICategoria | null) => void;
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
}));
