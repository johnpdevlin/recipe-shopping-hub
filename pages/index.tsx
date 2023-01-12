/** @format */

import Head from 'next/head';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Recipe / Shopping Hub</title>
				<meta
					name='description'
					content='An app to manage recipes and your shopping list for the week ahead.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
		</>
	);
}
