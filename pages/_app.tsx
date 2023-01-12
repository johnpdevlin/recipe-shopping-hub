/** @format */

import type { AppProps } from 'next/app';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme, Paper, CssBaseline } from '@mui/material';
import { useMemo } from 'react';
import Header from '../UI-Components/Header';

export default function App({ Component, pageProps }: AppProps) {
	const prefersDarkMode = '';
	// useMediaQuery('(prefers-color-scheme: dark)');
	// Update the theme only if the mode changes

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersDarkMode ? 'dark' : 'light',
					primary: {
						main: '#89d6fb',
					},
					secondary: {
						main: '#02a9f7',
					},
					info: {
						main: '#e98d2c',
					},
					warning: {
						main: '#02577a',
					},
					success: {
						main: '#e98d2c',
					},
					background: {
						default: '#ccc8c4',
					},
				},
				typography: {
					h1: {
						color: '#02577a',
					},
					h2: {
						color: '#e98d2c',
					},
					h3: {
						color: '#02a9f7',
					},
					h4: {
						color: '#e98d2c',
					},
					h5: {
						color: '#02a9f7',
					},
					h6: {
						color: '#02577a',
					},
				},
			}),
		[prefersDarkMode]
	);
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<Header />

				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
