import type { NextPage } from 'next';
import Head from 'next/head';
import { Producto } from '../components/Producto';
import { Layout } from '../layout/Layout';
import { quioscoContext } from '../store/quioscoContext';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
	const { categoriaActual } = quioscoContext();

	console.log(categoriaActual);

	return (
		<>
			<Layout pagina={`Cafe Menu - ${categoriaActual?.nombre}`}>
				<h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
				<p className="text-2xl my-10">
					Elige y personaliza tu pedido a continuacion
				</p>
				<div className="grid gap-4 xl:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2">
					{categoriaActual?.productos?.map((producto) => (
						<Producto key={producto.id} producto={producto} />
					))}
				</div>
			</Layout>
		</>
	);
};

export default Home;
