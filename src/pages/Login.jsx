import React from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import store from '../redux/store';

const style = makeStyles({
  root: {
    paddingBottom: '70%',
    background: 'linear-gradient(45deg, #cc8b5c, #78cf6d, #6565f0)',
    backgroundSize: '200% 200%',
    animation: '$lo 5s ease infinite',
    '@global': {
      '@keyframes lo': {
        '0%': { backgroundPosition: '45% 0%' },
        '50%': { backgroundPosition: '3% 100%' },
        '100%': { backgroundPosition: '45% 0%' },
      },
    },
  },
  title: { color: '#fff', fontWeight: 'bold' },
});
const Login = () => {
  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/rooms',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };
  const classes = style();
  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        className={classes.root}
      >
        <Typography variant="h2" className={classes.title}>
          {'Ingresa'}
        </Typography>
        {store.getState().auth.loaded ? (
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        ) : (
          <Redirect to="/rooms" />
        )}
      </Grid>
    </>
  );
};

export default Login;
