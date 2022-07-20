import React, { FormEvent, useEffect, useCallback } from 'react';
import { Layout } from '../layout/Layout';
import { quioscoContext } from '../store/quioscoContext';

const Total = () => {
	const { pedido, nombre, setNombre, total } = quioscoContext();

	const colocarOrden = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('enviando orden');
	};

	const comprobarPedido = useCallback(() => {
		return pedido.length === 0 || nombre.length <= 3;
	}, [pedido, nombre]);

	useEffect(() => {
		comprobarPedido();
	}, [pedido, comprobarPedido]);

	return (
		<Layout pagina="Total y Confirmar Pedido">
			<h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
			<p className="text-2xl my-10">Confirma tu pedido a continuacion</p>
			<form onSubmit={colocarOrden}>
				<div>
					<label
						htmlFor="nombre"
						className="uppercase block text-slate-800 font-bold"
					>
						Nombre
					</label>
					<input
						id="nombre"
						type="text"
						className="bg-gray-200 w-full lg:w-1/3 rounded-md mt-3 p-2"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				<div className="mt-10">
					<p className="text-2xl">
						Total a pagar <span className="font-bold"></span>
					</p>
				</div>
				<div className="mt-5">
					<input
						type="submit"
						value="Confirmar Pedido"
						className="w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white bg-indigo-600 disabled:cursor-not-allowed hover:cursor-pointer disabled:bg-indigo-100 hover:bg-indigo-800"
						disabled={comprobarPedido()}
					/>
				</div>
			</form>
		</Layout>
	);
};

export default Total;
