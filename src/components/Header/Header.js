import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import Search from "./Search";
import { withStyles } from "@material-ui/styles";
import Headerbutton from "./Headerbutton";

const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);

const useStyles = makeStyles({
  header: {
    backgroundColor: "#2874f0",
    height: 55,
  },
  logo: {
    width: 75,
  },
  subLogo: {
    marginLeft: 4,
    width: 10,
    height: 10,
  },
  container: {
    display: "flex",
  },
  component: {
    marginLeft: "12%",
    lineHeight: 0,
  },
  subHeading: {
    fontSize: 12,
    fontStyle: "italic",
  },
});

const Header = () => {
  const classes = useStyles();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <AppBar className={classes.header}>
      <ToolBar>
        <Box className={classes.component}>
          <img src={logoURL} alt="" className={classes.logo} />
          <Box className={classes.container}>
            <Typography className={classes.subHeading}>
              Explore <span style={{ color: "#f2de0f" }}> Plus </span>
            </Typography>
            <img
              src={subURL}
              alt=""
              className={classes.subLogo}
              color="#f2de0f"
            />
          </Box>
        </Box>
        <Search />
        <Headerbutton />
      </ToolBar>
    </AppBar>
  );
};

export default Header;
