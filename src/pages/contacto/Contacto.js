import {  
  Typography,
  Container,
  Grid,
  Button,
  TextField,
  Box,
 } from "@mui/material";




function Contacto() {

  return (
    <Container component="main" maxWidth="md">
      <div>
        <Typography variant="h2" flexGrow={1} textAlign="center" m={2} fontSize={40}>
            Sigueme en mis redes
        </Typography>
        <Box>
          <Grid container spacing={2} mb={2}>

            <Grid item xs={12} sm={6}>
              <Typography variant="p" flexGrow={1} textAlign="center" m={2} fontSize={25}>
                Instagram
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="p" flexGrow={1} textAlign="center" m={2} fontSize={25}>
                WhatsApp
              </Typography>
            </Grid>

          </Grid>
        </Box>
      </div>
      <div >
        <Typography variant="h1" flexGrow={1} textAlign="center" m={2} fontSize={40}>
          Contactame
        </Typography>
        <form noValidate>
          <Grid container spacing={2} mb={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="mensaje"
                label="Tu mensaje"
                name="mensaje"
                multiline
                rows={4}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Contactame
          </Button>
        </form>
      </div>

    </Container>
  );
}

export default Contacto;