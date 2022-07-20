import { useRouter } from 'next/router';
import React, { FormEvent, useEffect, useCallback, useState } from 'react';
import { formatearDinero } from '../helpers';
import { Layout } from '../layout/Layout';
import { quioscoContext } from '../store/quioscoContext';
import { trpc } from '../utils/trpc';
import { toast } from 'react-toastify';

const Total = () => {
	const router = useRouter();
	const [disabled, setDisabled] = useState(false);
	const { pedido, nombre, setNombre, total, setTotal, resetState } =
		quioscoContext();
	const createOrden = trpc.useMutation(['orden.createOrden']);

	const colocarOrden = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setDisabled(true);
		createOrden.mutateAsync({
			nombre,
			total,
			pedido,
		});
		toast.success('Orden creada correctamente');

		setTimeout(() => {
			resetState();
			setDisabled(false);
			router.push('/');
		}, 2000);
	};

	useEffect(() => {
		const nuevoTotal = pedido.reduce(
			(total, producto) => producto.precio * producto.cantidad + total,
			0,
		);
		setTotal(nuevoTotal);
	}, [pedido, setTotal]);

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
						Total a pagar{' '}
						<span className="font-bold">{formatearDinero(total)}</span>
					</p>
				</div>
				<div className="mt-5">
					<input
						type="submit"
						value="Confirmar Pedido"
						className="w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white bg-indigo-600 disabled:cursor-not-allowed hover:cursor-pointer disabled:bg-indigo-100 hover:bg-indigo-800"
						disabled={comprobarPedido() || disabled}
					/>
				</div>
			</form>
		</Layout>
	);
};

export default Total;
