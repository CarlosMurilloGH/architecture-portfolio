import React from 'react';
import {AppBar, Toolbar, IconButton, Stack, Button} from "@mui/material";
import { Link } from 'react-router-dom';
import Logo from "../../media/logo720studio.png";


function Navbar() {


  return (
    <div>
      <AppBar position="sticky" style={{ backgroundColor: '#fff',color:"#000" }}>
        <Toolbar  >
          <IconButton size="small" edge="start" aria-label="logo">
            <img src={Logo} alt="logo720" height={100} />
          </IconButton>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">
              <Link to="/">Inicio</Link>
            </Button>
            <Button color="inherit">
              <Link to="/contacto">Contacto</Link>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <div></div>
    </div>
    
  )
}

export default Navbar