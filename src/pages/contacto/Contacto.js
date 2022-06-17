import React,{useRef} from "react"
import {  
  Typography,
  TextField,
  Button,
  FormControl,
  Paper,
  Container
 } from "@mui/material";
 import InstagramIcon from '@mui/icons-material/Instagram';
 import WhatsAppIcon from '@mui/icons-material/WhatsApp';
 import "./Contacto.css";
 import emailjs from '@emailjs/browser';

function Contacto() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_uhmi3gc",
        "template_5rwkxer",
        form.current,
        "mYaN8DqL44vIhv2wq"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <div className="contactcontainer">
      <Container sx={{minWidth: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"}}>
        <Paper sx={{
          maxWidth: "70%",
          minWidth:{xs:"90%",lg:"40%"},
          minHeight: "50vh",
          display: {xs:"block",lg:"flex"},
          alignItems: "center",
          justifyContent:'space-around',
          m:'auto',
          p:3
        }}>
      <div>
        <Container sx={{display:{xs:'flex',md:'flex',lg:'block'},  justifyContent:'space-around' }}>
        
          <a href="https://www.instagram.com/studio720.arq/"><InstagramIcon fontSize="large"/></a>
          <a href="https://www.wa.link/hmayuu"><WhatsAppIcon fontSize="large"/></a>

        </Container>
      </div>
      <div className="formcontainer">
        <Container>
        <Typography variant="h1" flexGrow={1} textAlign="center" m={2} sx={{ fontSize:{xs:20, sm:20, lg:40} }}>
          Contactame
        </Typography>
        <FormControl ref={form} onSubmit={sendEmail} className="form-control form-control-lg">
        <TextField label="Nombre" variant="outlined" margin="dense"  type="text" name="user_name" />
        <TextField label="Email" variant="outlined" margin="dense"  type="email" name="user_email" />
        <TextField label="Mensaje" placeholder="Mensaje" margin="dense"  multilinename="Mensaje" multiline rows={4} name="message"/>
        <Button type="submit" variant="contained" value="Enviar">Enviar</Button>
      </FormControl>
      </Container>
      </div>
      </Paper>
      </Container>
    </div>
  );
}

export default Contacto;