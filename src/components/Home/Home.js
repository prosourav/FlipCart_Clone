import { Box, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Slide from "../Slide/Slide";
import Midsection from "../MidSection/Midsection";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/Actions/productAction";

const useStyle = makeStyles({
  component: {
    padding: 10,
    backgroundColor: "#f2f2f2",
  },
  rightwrapper: {
    backgroundColor: "#fff",
    padding: 5,
    margin: "12px 0 0 10px",
    width: "17%",
  },
});

const Home = () => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  const { products, error } = useSelector((state) => state.allProducts);

  console.log({ products });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProducts());
  }, [dispatch]);

  const classes = useStyle();
  return (
    <Box>
      <Navbar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: "flex" }}>
          <Box style={{ width: "82%" }}>
            <Slide timer={true} products={products} title="Deal of the day" />
          </Box>
          <Box className={classes.rightwrapper}>
            <img src={adURL} alt="" style={{ width: 230 }} />
          </Box>
        </Box>
      </Box>
      <Midsection />
      <Slide timer={false} products={products} title="Discounts for you" />
      <Slide timer={false} products={products} title="Suggested Items" />
      <Slide timer={false} products={products} title="Top Selection" />
      <Slide timer={false} products={products} title="Recommended Items" />
      <Slide timer={false} products={products} title="Best Sellers" />
    </Box>
  );
};

export default Home;
