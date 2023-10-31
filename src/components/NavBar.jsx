import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Logo from '../../public/icons/logo.png'
import { Link } from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const pages = ['Mujer', 'Hombre', 'Niños'];
const settings = ['Perfil', 'Mi Cuenta', 'Salir'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>

          <Link to={"/"} >
            <img src={Logo} alt="Logo" />
          </Link>
            <Link to={"/"} >
              <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'white',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                eSHOP
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: "center", alignItems: "center" }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuIcon />
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <StorefrontIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              eSHOP
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link to={`/category/${"mujer"}`}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 1, color: 'white', display: 'block', fontSize: 18.5, paddingRight: 3}}
                >
                  Mujer
                </Button>
              </Link>
              <Link to={`/category/${"hombre"}`}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 1, color: 'white', display: 'block', fontSize: 18.5, paddingRight: 3 }}
                >
                  Hombre
                </Button>
              </Link>
              <Link to={`/category/${"niño"}`}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 1, color: 'white', display: 'block', fontSize: 18.5, paddingRight: 3 }}
                >
                  Niño
                </Button>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>

              <Link to={"/Cart"}>
                <IconButton size="large" color="default">
                  <Badge badgeContent={8} color="error" anchorOrigin={{ vertical: "bottom", horizontal: "left", }}>
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Link>


              <Tooltip title="Abrir Configuración">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <PermIdentityIcon fontSize='large' />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider >
  );
}
export default ResponsiveAppBar;