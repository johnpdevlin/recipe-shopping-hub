/** @format */

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Stack } from '@mui/material';
import axios from 'axios';

const theme = createTheme();

function AddRecipe() {
	const [recipe, setRecipe] = React.useState([]);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const url: string = event.currentTarget.url.value;
		const title: string = event.currentTarget.title.value;

		const reqBody = { url: url, title: title };

		axios
			.post('/api/scrape/bbcgoodfood', reqBody)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='md'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<RestaurantMenuIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Scrub BBC Good Food Recipe
					</Typography>
					<Typography component='h3' variant='subtitle2'>
						Enter the URL below to add it to your collection
					</Typography>
					<Box
						component='form'
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}>
						<Stack direction='column'>
							<TextField
								margin='normal'
								type='url'
								required
								fullWidth
								id='url'
								label='url'
								placeholder='https://www.bbcgoodfood.com/recipes/...'
								name='url'
								autoComplete='url'
								autoFocus
							/>
							<TextField
								margin='normal'
								required
								fullWidth
								id='title'
								label='title'
								placeholder='Name of your recipe'
								name='title'
								autoFocus
							/>

							<Button type='submit' variant='contained' sx={{ m: 2.5 }}>
								Submit
							</Button>
						</Stack>
					</Box>
					{recipe}
				</Box>
			</Container>
		</ThemeProvider>
	);
}

export default AddRecipe;
