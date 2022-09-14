import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import React, { useState } from 'react';
import Image from 'next/image'
import logo from './duane_logo_transparent.svg'







const darkTheme = createTheme({
 palette: {
  mode: 'dark',
  primary: {
   main: '#ffffff',
  },
 },
});









const Navbar = () => {

 const [anchorEl, setAnchorEl] = React.useState(null);
 const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

 const isMenuOpen = Boolean(anchorEl);
 const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

 const handleProfileMenuOpen = (event) => {
  setAnchorEl(event.currentTarget);
 };

 const handleMobileMenuClose = () => {
  setMobileMoreAnchorEl(null);
 };

 const handleMenuClose = () => {
  setAnchorEl(null);
  handleMobileMenuClose();
 };

 const handleMobileMenuOpen = (event) => {
  setMobileMoreAnchorEl(event.currentTarget);
 };

 const menuId = 'primary-search-account-menu';


 const renderMenu = (
  <Menu
   anchorEl={anchorEl}
   anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
   }}
   id={menuId}
   keepMounted
   transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
   }}
   open={isMenuOpen}
   onClose={handleMenuClose}
  >
   
  </Menu>
 );


 const mobileMenuId = 'primary-search-account-menu-mobile';
 const renderMobileMenu = (
  <Menu
   anchorEl={mobileMoreAnchorEl}
   anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
   }}
   id={mobileMenuId}
   keepMounted
   transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
   }}
   open={isMobileMenuOpen}
   onClose={handleMobileMenuClose}
  >
   {/* <MenuItem>
    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
     <Badge badgeContent={4} color="error">
      <MailIcon />
     </Badge>
    </IconButton>
    <p>Messages</p>
   </MenuItem>
   <MenuItem>
    <IconButton
     size="large"
     aria-label="show 17 new notifications"
     color="inherit"
    >
     <Badge badgeContent={17} color="error">
      <NotificationsIcon />
     </Badge>
    </IconButton>
    <p>Notifications</p>
   </MenuItem>
   <MenuItem onClick={handleProfileMenuOpen}>
    <IconButton
     size="large"
     aria-label="account of current user"
     aria-controls="primary-search-account-menu"
     aria-haspopup="true"
     color="inherit"
    >
     <AccountCircle />
    </IconButton>
    <p>Profile</p>
   </MenuItem> */}

   <MenuItem >
    <Button href="/" >Home</Button>

   </MenuItem>
   <MenuItem >
    <Button href='/about'>About</Button>

   </MenuItem>

 
     <MenuItem >
      <Button href='/contact'>Contact</Button> 
     </MenuItem>

  </Menu>
 );



 const [isOpen, setIsOpen] = useState(false);

 const toggle = () => {
  setIsOpen(!isOpen);
 };

 return (

  <ThemeProvider theme={darkTheme}>
  <React.Fragment>

   <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" >
     <Toolbar>
      <IconButton
       size="large"
       edge="start"
       color="inherit"
       aria-label="open drawer"
       sx={{ mr: 2 }}
       href='/'
      >
 


     
    <Image 
    alt='Duane Logo' 
    src={logo}
    height='65px'
    width='56px'
    
    />
  
      </IconButton>

      <Link
       variant="h6"
       sx={{ display: { xs: 'none', sm: 'block' } }}
       href='/' underline="none">
      </Link>

      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{
       display: { xs: 'none', md: 'flex' },
       flexWrap: 'wrap',
       justifyContent: 'center',
       typography: 'body1',
       '& > :not(style) + :not(style)': {
        ml: 2,
       },
      }}



      >


       <Button href="/">Home</Button>

       <Button href="/about">About</Button>

       <Button href="/contact">Contact</Button>
         
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
       <IconButton
        size="large"
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
       >
        <MenuIcon />
       </IconButton>
      </Box>
     </Toolbar>
    </AppBar>
    {renderMobileMenu}
    {renderMenu}
   </Box>

  </React.Fragment>
  </ThemeProvider>
 );
};

export default Navbar;