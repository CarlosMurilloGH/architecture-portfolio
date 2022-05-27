import React from 'react';
import {AppBar, Toolbar, IconButton, Stack, Button} from "@mui/material";
import Logo from "../../media/logo720studio.png";


function Navbar() {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton size="small" edge="start" aria-label="logo">
            <img src={Logo} alt="logo720" height={100} />
          </IconButton>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Contactame</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <div></div>
    </div>
    
  )
}

export default Navbar