import React from 'react';
import { Button, Typography } from '@mui/material';
import { Redirect } from 'react-router-dom';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Register from './components/Register/index';
import Login from './components/Login/index';

import Home from './../home/index';
import './styles.scss';
import { makeStyles } from '@mui/styles';
import LoginWithGoogle from './components/LoginWithGoogle/index';
import SliderLogin from './components/Slider';
import Admin from './../admin/index';

// Make style for material
const useStyle = makeStyles(theme => ({

  root: {

  },

  paper: {
    padding: '3rem 7rem',
    // margin: '5rem 0'
    fontSize: '3rem',
    borderRadius: '20px !important',
    // alignItems: 'center'
    textAlign: 'center'
  },
  orTitle: {
    textAlign: 'center',
    marginBottom: '20px !IMPORTANT'
  },
  getStartedBtn: {
    border: "1px solid #DB36A4 !IMPORTANT",
    backgroundColor: '#DB36A4 !IMPORTANT',
    marginLeft: '10px !IMPORTANT',
    color: 'white !IMPORTANT',
    "&:hover": {
      color: 'black !IMPORTANT',
      backgroundColor: '#fff !IMPORTANT',
    }

  },
  signupBtn: {
    border: "1px solid #DB36A4 !IMPORTANT",
    marginLeft: '10px !IMPORTANT',
  },
  cancleBtn: {
    color: '#DB36A4 !important'
  }
}));

Authentication.propTypes = {

};

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register'
}


function Authentication(props) {

  // Make styles for material
  const classes = useStyle();

  const currentUser = useSelector(state => state.account.current);
  console.log("CurrentUser", currentUser);


  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setMode(MODE.LOGIN);
  };

  const onClose = () => {
  }



  return (
    currentUser && currentUser.role === 2 ? <Redirect to='/home' /> :
      currentUser && currentUser.role === 0 ? <Redirect to='/admin' /> :
        currentUser && currentUser.role === 1 ? <Redirect to='/admin' /> :

          <div className='authentication'>
            {/* <Grid container > */}
            <div className='authentication__left'>
              <h1>TOYS</h1>
              <SliderLogin />
            </div>
            <div className='authentication__right'>
              <h1>WORLD</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias minima voluptates iste est illo, dolor adipisci ea, vero deleniti aut placeat, officiis quod nam dolorem id totam neque incidunt eum minus nobis consectetur distinctio tempora eveniet! Dicta, iste. Optio quidem adipisci vel repudiandae doloremque ratione laudantium sequi earum neque.</p>
              <Button className={classes.getStartedBtn} color="inherit" onClick={handleClickOpen}>GET STARTED</Button>
            </div>

            <Dialog disableEscapeKeyDown={true} onBackdropClick={onClose} open={open} onClose={handleClose}>
              <DialogContent className={classes.paper}>

                {mode === MODE.REGISTER && (
                  <>
                    <Register closeDialog={handleClose} />
                    <div className='SignUpText'>
                      <Typography>Already have an account?</Typography>
                      <Button className={classes.signupBtn} color="inherit" onClick={() => setMode(MODE.LOGIN)}>login here</Button>
                    </div>
                  </>
                )}

                {mode === MODE.LOGIN && (
                  <>
                    <Login closeDialog={handleClose} />
                    <Typography className={classes.orTitle}>Or</Typography>
                    <LoginWithGoogle />

                    <div className='SignUpText'>
                      <Typography>Don't have an account?</Typography>
                      <Button className={classes.signupBtn} color="inherit" onClick={() => setMode(MODE.REGISTER)}>Sign up here</Button>
                    </div>
                  </>
                )}
              </DialogContent>

              <DialogActions>
                <Button className={classes.cancleBtn} onClick={handleClose}>Cancel</Button>
              </DialogActions>
            </Dialog>

          </div>
  );
}

export default Authentication;