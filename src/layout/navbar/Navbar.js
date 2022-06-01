import React,{useState} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import Logo from "../../media/logo720studio.png";
import { Link } from 'react-router-dom';



const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" style={{ boxShadow:"none", backgroundColor:"white" }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LOGO PC */}
          <IconButton size="small" edge="start" aria-label="logo"            
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}>
            <img src={Logo} alt="logo720" height={100} />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: 'black' }}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography><Link to="/">Inicio</Link></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography><Link to="/contacto">Contacto</Link></Typography>
              </MenuItem>
            </Menu>
          </Box>
          {/* LOGO CELULAR */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

          {/* LOGO CENTRADO CELULAR */}
          <IconButton size="small"  aria-label="logo"            
            sx={{
              display: { xs: 'flex', md: 'none' },
            }}>
            <img src={Logo} alt="logo720" height={100} />
          </IconButton>

          {/* MENU ITEMS PC */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
            >
              <Link to="/">Inicio</Link>
            </Button>
            <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
            >
              <Link to="/contacto">Contacto</Link>
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
