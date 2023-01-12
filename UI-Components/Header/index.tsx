/** @format */
import { useState } from 'react';

// MUI COMPONENTS
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
// INTERNAL COMPONENTS
import SearchBar from './SearchBar';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import { Typography } from '@mui/material';

const pages = ['Recipes', 'Shopping List', 'Scrape', 'About', 'Contact'];

function HeaderNavBar() {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<>
			<AppBar position='static' sx={{ mb: 4 }}>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						{/* MOBILE / SMALL MENU */}
						<MobileMenu
							pages={pages}
							handleOpenNavMenu={handleOpenNavMenu}
							handleCloseNavMenu={handleCloseNavMenu}
							anchorElNav={anchorElNav}
						/>
						{/* END MOBILE MENU */}

						{/* LOGO FOR HOME */}
						<Typography variant='h5'>Recipe / Shopping List Hub</Typography>
						{/* END LOGO FOR HOME */}

						{/* DESKTOP MENU */}
						<DesktopMenu
							pages={pages}
							handleCloseNavMenu={handleCloseNavMenu}
						/>
						{/* END DESKTOP MENU */}

						{/* SEARCHBAR */}
						<SearchBar />
						{/* END SEARCHBAR */}
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
}
export default HeaderNavBar;
