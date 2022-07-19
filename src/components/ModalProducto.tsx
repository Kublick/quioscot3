import Image from 'next/image';
import { useState } from 'react';
import { formatearDinero } from '../helpers';
import { quioscoContext } from '../store/quioscoContext';

const ModalProducto = () => {
	const { producto, setModal, modal } = quioscoContext();
	const [cantidad, setCantidad] = useState(1);

	return (
		<div className="md:flex gap-10">
			<div className="md:w-1/3">
				<Image
					width={300}
					height={400}
					alt={`Imagen Producto ${producto?.nombre}`}
					src={`/assets/img/${producto?.imagen}.jpg`}
				/>
			</div>

			<div className="md:w-2/3">
				<div className="flex justify-end">
					<button onClick={() => setModal(!modal)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-7 w-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</button>
				</div>
				<h1 className="text-3xl font-bold mt-5">{producto?.nombre}</h1>
				<p className="mt-5 font-black text-5xl text-amber-500">
					{formatearDinero(producto?.precio)}
				</p>

				<div className="mt-5 flex gap-4 items-center">
					<button
						onClick={() => {
							if (cantidad <= 1) return;
							setCantidad(cantidad - 1);
						}}
						type="button"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-7 w-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</button>
					<p className="text-3xl">{cantidad}</p>
					<button
						onClick={() => {
							if (cantidad >= 5) return;
							setCantidad(cantidad + 1);
						}}
						type="button"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalProducto;
