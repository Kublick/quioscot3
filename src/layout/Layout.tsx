import Head from 'next/head';
import React, { FC } from 'react';
import { Sidebar } from '../components/Sidebar';
// import { Sidebar } from '../components/Sidebar';

type Props = {
	pagina: string;
	children: React.ReactNode;
};

export const Layout: FC<Props> = ({ pagina, children }) => {
	return (
		<>
			<Head>
				<title>Café - {pagina}</title>
			</Head>
			<meta name="description" content="Quiosco Cafeteria" />

			<div className="md:flex">
				<aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
					<Sidebar />
				</aside>
				<main className="md:w-8-12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll ">
					Test
				</main>
			</div>
		</>
	);
};
