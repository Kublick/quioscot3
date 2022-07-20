import Head from 'next/head';
import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { Sidebar } from '../components/Sidebar';
import Modal from 'react-modal';
import { quioscoContext } from '../store/quioscoContext';
import ModalProducto from '../components/ModalProducto';
import 'react-toastify/dist/ReactToastify.css';
import { Pasos } from '../components/Pasos';

type Props = {
	pagina: string;
	children: React.ReactNode;
};
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

Modal.setAppElement('#__next');

export const Layout: FC<Props> = ({ pagina, children }) => {
	const { modal, pedido } = quioscoContext();

	return (
		<>
			<Head>
				<title>{pagina}</title>
			</Head>
			<meta name="description" content="Quiosco Cafeteria" />
			<div className="md:flex">
				<aside className="min-w-[297px] md:w-4/12 xl:w-1/4 2xl:w-1/5">
					<Sidebar />
				</aside>
				<div className="p-10 w-full">
					<Pasos />
					<main className="h-screen overflow-y-scroll ">{children}</main>
				</div>
			</div>
			<Modal isOpen={modal} style={customStyles}>
				<ModalProducto />
			</Modal>
			<ToastContainer />
		</>
	);
};
