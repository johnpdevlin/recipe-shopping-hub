/** @format */

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Head from 'next/head';
import { Button, Stack, Typography } from '@mui/material';

function Scrape(): JSX.Element {
	return (
		<>
			<Head>
				<title>Scrape - Recipe / Shopping Hub</title>
			</Head>
			<Box
				component='form'
				sx={{
					width: '60%',
					margin: 'auto',
					textAlign: 'justify',
					position: 'center',
				}}
				noValidate
				autoComplete='off'>
				<Stack direction='column' rowGap={2}>
					<Typography variant='h4'>
						Scrape a recipe from BBC Good Food
					</Typography>

					<Typography variant='body2'>
						Paste the URL of the recipe you want to scrape below and it will be
						added to your recipe list.
					</Typography>

					<Stack direction='row'>
						<TextField
							id='bbc good food url input'
							placeholder='www.bbcgoodfood.com/recipes/...'
							sx={{
								backgroundColor: 'white',
								borderRadius: '7px',
								mx: 1.2,
								width: '70%',
							}}
							multiline
						/>
						<Button variant='contained' component='label'>
							Scrape
						</Button>
					</Stack>
				</Stack>
			</Box>
		</>
	);
}

export default Scrape;
