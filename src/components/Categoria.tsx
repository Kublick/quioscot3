import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, useEffect } from 'react';
import { ICategoria } from '../interfaces/categorias';
import { quioscoContext } from '../store/quioscoContext';
import { trpc } from '../utils/trpc';

type Props = {
	categoria: ICategoria;
};

export const Categoria: FC<Props> = ({ categoria }) => {
	const router = useRouter();

	const { icono, nombre, id } = categoria;
	const { setCategoriaActual, categorias, categoriaActual } = quioscoContext();

	useEffect(() => {
		if (!categoriaActual && categorias) {
			setCategoriaActual(categorias[0] as ICategoria);
		}
	}, [categoriaActual, categorias, setCategoriaActual]);

	const handleCategoriaActual = (id: number) => {
		const categoria = categorias.filter((cat) => cat.id === id);
		setCategoriaActual(categoria[0] as ICategoria);
		router.push('/');
	};

	return (
		<div
			className={`${
				categoriaActual?.id === id ? 'bg-amber-400' : ''
			}  flex items-center gap-5 w-full border p-5 hover:bg-amber-400`}
		>
			<Image
				width={70}
				height={70}
				src={`/assets/img/icono_${icono}.svg`}
				alt="Imagen Icono"
			/>
			<button
				className="text-2xl font-bold hover:cursor-pointer"
				type="button"
				onClick={() => handleCategoriaActual(id)}
			>
				{nombre}
			</button>
		</div>
	);
};
