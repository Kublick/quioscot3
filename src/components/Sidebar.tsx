import Image from 'next/image';
import React, { useEffect } from 'react';
import { quioscoContext } from '../store/quioscoContext';
import { trpc } from '../utils/trpc';
import { Categoria } from './Categoria';

export const Sidebar = () => {
	const { setCategorias } = quioscoContext();
	const { data: categorias } = trpc.useQuery(['categoria.getCategorias']);

	useEffect(() => {
		if (categorias) {
			setCategorias(categorias);
		}
	}, [categorias, setCategorias]);

	return (
		<div>
			<Image
				width={300}
				height={100}
				src="/assets/img/logo.svg"
				alt="Imagen Logo"
			/>
			<nav className="mt-10">
				{categorias?.map((categoria) => (
					<Categoria key={categoria.id} categoria={categoria} />
				))}
			</nav>
		</div>
	);
};
