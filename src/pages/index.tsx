import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../layout/Layout';
import { quioscoContext } from '../store/quioscoContext';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
	const { categoriaActual } = quioscoContext();

	return (
		<>
			<Layout pagina={`Menu ${categoriaActual?.nombre}`}>
				<h1 className="text-4xl font-black">
					{categoriaActual ? categoriaActual.nombre : 'Test'}
				</h1>
			</Layout>
		</>
	);
};

export default Home;
