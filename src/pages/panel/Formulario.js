import React from "react";
import { Button,Input,TextField,Grid } from "@mui/material";
import { Container } from "@mui/system";
import { signOut } from 'firebase/auth';
import {auth} from '../../fb/fb';


export const Formulario = (props) => {
  const { data, setData, saveData, setSelectedFile } = props;

  const submitHandler = async (e) => {
    e.preventDefault();
    saveData();
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
		  <Container>
			<h1>Sube tu imagen</h1>
			<form className="productForm">
			<div className="uploadbox">
				<Button variant="contained" component="label">
				<Input
					type="file"
					onChange={(e) => setSelectedFile(e.target.files[0])}
					accept="image/png, image/gif, image/jpeg"
				/>
				</Button>
			</div>
			<div className="nombrebox">
				<TextField
				fullWidth 
				margin="dense"
				size="small"
				id="filled-basic"
				label="Nombre de la imagen"
				variant="filled"
				type="text"
				onChange={(e) => setData({ ...data, name: e.target.value })}
				value={data.name}
				name="name"
				className="inputForm"
				/>
			</div>
			<Button fullWidth variant="contained" onClick={submitHandler}>
				Subir
			</Button>
			</form>
			<Button variant="contained" component="label" onClick={logout} sx={{mt:3}}>
			Cerrar sesión
			</Button>
		</Container>
      </Grid>
    </Grid>
  );
};
