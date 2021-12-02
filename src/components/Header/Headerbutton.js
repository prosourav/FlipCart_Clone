import { Badge, Box, Button, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import { loginContext } from "../../context/ContextProvider";
import Profile from "./Profile";

const useStyle = makeStyles({
  login: {
    backgroundColor: "#FFFFFF",
    color: "#7874f0",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
    boxShadow: "none",
  },
  wrapper: {
    margin: "0 7% 0 auto",
    display: "flex",
    "& > *": {
      FontSize: 12,
      marginRight: 50,
    },
    alignItems: "center",
  },
  container: {
    display: "flex",
    textDecoration: "none",
    color: "unset",
  },
});

const Headerbutton = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useContext(loginContext);

  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Box className={classes.wrapper}>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <Button
          variant="contained"
          className={classes.login}
          onClick={openDialog}
        >
          Login
        </Button>
      )}
      <Typography style={{ marginTop: "2px" }}>More</Typography>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={2} color="secondary">
          <ShoppingCart />
        </Badge>
        <Box style={{ marginLeft: 10 }}>cart</Box>
      </Link>
      <Login open={open} setOpen={setOpen} setAccount={setAccount} />
    </Box>
  );
};

export default Headerbutton;
