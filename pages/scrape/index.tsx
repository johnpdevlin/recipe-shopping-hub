/** @format */

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Head from 'next/head';
import { Typography } from '@mui/material';

function Scrape(): JSX.Element {
	return (
		<>
			<Head>
				<title>Scrape - Recipe / Shopping Hub</title>
			</Head>
			<Box
				component='form'
				sx={{
					'& .MuiTextField-root': { m: 5, width: '30%' },
					textAlign: 'center',
					position: 'center',
				}}
				noValidate
				autoComplete='off'>
				<Box sx={{ textAlign: 'center', position: 'center' }}>
					<Typography variant='h4'>
						Scrape a recipe from BBC Good Food
					</Typography>
					<Typography variant='body2'>
						Paste the URL of the recipe you want to scrape below and it will be
						added to your recipe list.
					</Typography>
				</Box>
				<TextField
					id='outlined-textarea'
					placeholder='www.bbcgoodfood.com/recipes/...'
					sx={{ backgroundColor: 'white', borderRadius: '5px' }}
					multiline
				/>
			</Box>
		</>
	);
}

export default Scrape;
