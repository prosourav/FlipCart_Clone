import { Box, makeStyles } from "@material-ui/core";
import Header from "../Header/Header";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";

const useStyle = makeStyles({
  component: {
    padding: 10,
    backgroundColor: "#f2f2f2",
  },
});

const Home = () => {
  const classes = useStyle();
  return (
    <Box>
      <Navbar />
      <Box className={classes.component}>
        <Banner />
      </Box>
    </Box>
  );
};

export default Home;
