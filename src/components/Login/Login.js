import {
  Box,
  Button,
  Dialog,
  DialogContent,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyle = makeStyles({
  component: {
    height: "80vh",
    width: "105vh",
    maxWidth: "unset !important",
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    background: "#2874f0",
    backgroundPosition: "center 85%",
    backgroundRepeat: "no-repeat",
    height: "80vh",
    width: "40%",
    padding: "45px 35px",
    "& > *": {
      color: "#FFFFFF",
      fontWeight: 600,
    },
  },
  login: {
    padding: "25px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "& > *": {
      marginTop: 20,
    },
  },
  loginbtn: {
    textTransform: "none",
    background: "#FB641B",
    color: "#fff",
    height: 48,
    borderRadius: 2,
  },
  requestbtn: {
    textTransform: "none",
    background: "#fff",
    color: "#2874f0",
    height: 48,
    borderRadius: 2,
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
  },
  text: {
    color: "#878787",
    fontSize: 12,
    textAlign: "center",
  },
  createText: {
    margin: "auto 0 5px 0",
    textAlign: "center",
    color: "#2874f0",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
  },
  error: {
    fontSize: 10,
    color: "#ff6161",
    lineHeight: 0,
    marginTop: 10,
    fontWeight: 600,
  },
});

const initialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: " Sign up with your mobile number to get started",
  },
};

const Login = ({ open, setOpen }) => {
  const classes = useStyle();
  const [account, toggleAccount] = useState(initialValue.login);
  const handleClose = () => {
    setOpen(false);
    toggleAccount(initialValue.login);
  };

  const toggleSignup = () => {
    toggleAccount(initialValue.signup);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.component}>
        <Box style={{ display: "flex" }}>
          <Box className={classes.image}>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Box>
          {account.view === "login" ? (
            <Box className={classes.login}>
              <TextField name="username" label="Enter Email/Mobile number" />
              <TextField name="password" label="Enter Password" />
              <Typography className={classes.text}>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>
              <Button className={classes.loginbtn}>Login</Button>
              <Typography className={classes.text}>OR</Typography>
              <Button className={classes.requestbtn}>Request OTP</Button>
              <Typography
                className={classes.createText}
                onClick={() => toggleSignup()}
              >
                New to Flipkart? Create an account
              </Typography>
            </Box>
          ) : (
            <Box className={classes.login}>
              <TextField name="firstname" label="Enter Firstname" />
              <TextField name="lastname" label="Enter Lastname" />
              <TextField name="username" label="Enter Username" />
              <TextField name="email" label="Enter Email" />
              <TextField name="password" label="Enter Password" />
              <TextField name="phone" label="Enter Phone" />
              <Button className={classes.loginbtn}>Continue</Button>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
