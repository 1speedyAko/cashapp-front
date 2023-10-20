import React from 'react';
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
} from '@mui/material';

const SignUp = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={7}>
          <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h5" gutterBottom>
              Create an Account!
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                    id="firstName"
                    name="firstName"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                    id="lastName"
                    name="lastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    id="email"
                    name="email"
                    type="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    required
                    id="password"
                    name="password"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Confirm Password"
                    variant="outlined"
                    fullWidth
                    required
                    id="c_password"
                    name="c_password"
                    type="password"
                  />
                </Grid>
              </Grid>
              <Button
                type="button"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Register Account
              </Button>
            </form>
            <hr sx={{ mt: 2, mb: 3, border: '1px solid #ccc' }} />
            <div>
              <a
                href="#"
                className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
              >
                Forgot Password?
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
              >
                Already have an account? Login!
              </a>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
