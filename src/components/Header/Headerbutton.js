import { Badge, Box, Button, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";

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
  },
});

const Headerbutton = () => {
  const classes = useStyle();
  return (
    <Box className={classes.wrapper}>
      <Button variant="contained" className={classes.login}>
        Login
      </Button>
      <Typography style={{ marginTop: "2px" }}>More</Typography>
      <Box className={classes.container}>
        <Badge badgeContent={2} color="secondary">
          <ShoppingCart />
        </Badge>
        <Box style={{ marginLeft: 10 }}>cart</Box>
      </Box>
    </Box>
  );
};

export default Headerbutton;
