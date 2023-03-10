import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from "./SignIn.module.css";
import dragon from "../../img/dragon.jpg";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const theme = createTheme()

function SignIn() {
    const handleSubmit = async (event) => {
      event.preventDefault()
      const data = new FormData(event.currentTarget)

      await axios.get('http://localhost:5000/users/1')
        .then(defaultUser => {
            if(data.get('user') == defaultUser.data.name && data.get('password') == defaultUser.data.password) {
                localStorage.setItem("userName", defaultUser.data.name)
                localStorage.setItem("userId", defaultUser.data.id)
                return window.location.reload(false)
            }

            alert('O usuário ou a senha estão errados!');
        })
    };
    
      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img src={dragon} className={styles.dragon_icon} />
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="user"
                  label="User"
                  name="user"
                  autoComplete="user"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  color="error"
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      );
}

export default SignIn