import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';





export const Login = () => {
  const [login, setLogin] = useState({
    username: '',
    password: '',
  })

  return (
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#212121',
      }}
    >
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            //backgroundColor: '#212121',
          }}
        >
          <Box
            sx={{ backgroundColor: '#212121', borderRadius: '20px', pl: 1.5 }}
          >
            {/* <img src={logo} alt='logo' style={{ width: '20rem' }} /> */}
          </Box>
          {/* {failedLogin && (
            <span>
              <Typography
                component='span'
                variant='h5'
                align='center'
                color='error'
              >
                Failed to login, Retry or Sign up
              </Typography>
            </span>
          )} */}
          <Box
            sx={{ backgroundColor: '#FAFAFF', borderRadius: 3, px: 4, py: 2 }}
          >
            <TextField
              // error={failedLogin}
              margin='normal'
              required
              fullWidth
              id='username'
              label='User Name'
              name='username'
              autoComplete='Username'
              autoFocus
              onChange={e => {
                setLogin(prev => {
                  return { ...prev, username: e.target.value };
                });
                
              }}
            />
            <TextField
              // error={failedLogin}
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={e => {
                setLogin(prev => {
                  return { ...prev, password: e.target.value };
                });
              }}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  // postLogin();

                }
              }}
            />
          </Box>

          <Button
            fullWidth
            variant='contained'
            color='secondary'
            size='medium'
            sx={{
              borderRadius: '30px',
              width: 200,
            }}
            onClick={() => console.log(login)}
          >
            Login
          </Button>
          <Button
            fullWidth
            variant='contained'
            color='secondary'
            size='medium'
            sx={{
              borderRadius: '30px',
              width: 200,
              display: 'flex',
              justifyContent: 'center',
            }}
            // onClick={() => navigate('/signup')}
          >
            Create Account
          </Button>

          
          {/* {!apiRes.ok ? (
            <Box sx={{ m: 2, width: '100%' }}>
              <Typography variant='h5' component='h5' sx={{ color: 'white' }}>
                Connecting to Database
              </Typography>
              <LinearProgress />
            </Box>
          ) : null} */}
        </Box>
      </Container>
    </Box>
  )
}