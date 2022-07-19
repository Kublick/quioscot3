import Image from 'next/image';
import React, { FC } from 'react';
import { formatearDinero } from '../helpers';
import { IProducto } from '../interfaces/producto';
import { quioscoContext } from '../store/quioscoContext';

type Props = {
	producto: IProducto;
};

export const Producto: FC<Props> = ({ producto }) => {
	const { nombre, imagen, precio } = producto;
	const { setProducto, setModal, modal } = quioscoContext();

	const handleSetProducto = (producto: IProducto) => {
		setProducto(producto);
		setModal(!modal);
	};

	return (
		<div className="border p-3">
			<Image
				width={400}
				height={500}
				src={`/assets/img/${imagen}.jpg`}
				alt={`Imagen platillo ${nombre}`}
			/>
			<div className="p-5">
				<h3 className="text-2xl font-bold">{nombre}</h3>
				<p className="mt-5 font-black text-4xl text-amber-500">
					{formatearDinero(precio)}
				</p>
				<button
					type="button"
					onClick={() => {
						handleSetProducto(producto);
					}}
					className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
				>
					Agregar
				</button>
			</div>
		</div>
	);
};
