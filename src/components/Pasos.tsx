import { useRouter } from 'next/router';
import React from 'react';

const pasos = [
	{ paso: 1, nombre: 'Menu', url: '/ ' },
	{ paso: 2, nombre: 'Resumen', url: '/resumen' },
	{ paso: 3, nombre: 'Datos y Total', url: '/total' },
];

export const Pasos = () => {
	const router = useRouter();

	const calcularProgreso = () => {
		switch (router.pathname) {
			case '/':
				return 2;
			case '/resumen':
				return 50;
			case '/total':
				return 100;
		}
	};

	return (
		<>
			<div className="flex justify-between mb-5">
				{pasos.map((paso) => (
					<button
						key={paso.paso}
						className="text-2xl font-bold"
						onClick={() => {
							router.push(paso.url);
						}}
					>
						{paso.nombre}
					</button>
				))}
			</div>
			<div className="bg-gray-100 mb-10">
				<div
					className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
					style={{ width: `${calcularProgreso()}%` }}
				></div>
			</div>
		</>
	);
};
