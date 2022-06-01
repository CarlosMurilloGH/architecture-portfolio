import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../fb/fb";
import { useLocation, useNavigate } from "react-router";
import { Button,TextField,Grid } from "@mui/material";
import {Container} from "@mui/system";

function Login() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  // eslint-disable-next-line
  const [user, setUser] = useState({});

  const navigate=useNavigate();
  const location =useLocation();


  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });


  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    } if(location.state?.from) {
      navigate(location.state.from);
    }
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
          <h2> Inicia tu sesión </h2>
          <div>
            <div>
              <TextField
              fullWidth 
              margin="dense"
              size="small"
              id="filled-basic"
              label="Email"
              variant="filled"
                type="email"
                className="inputstyle"
                placeholder="Email"
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
              />
            </div>
            <div>
            <TextField
            fullWidth 
            margin="dense"
            size="small"
            id="filled-basic"
            label="Contraseña"
            variant="filled"
              className="inputstyle"
              placeholder="Contraseña"
              type="password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
            </div>
            <div>
              <Button fullWidth variant="contained" component="label" onClick={login}>Iniciar</Button>
            </div>
            </div>
          </Container>
        </Grid>
      </Grid>
  );
}

export default Login;