import { makeStyles } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../constants/data";

const useStyle = makeStyles({
  image: {
    width: "100%",
    height: 280,
  },
  carousel: {
    marginTop: 10,
  },
});

const Banner = () => {
  const classes = useStyle();
  return (
    <div>
      <Carousel
        indicators={false}
        autoPlay={true}
        animation="slide"
        cycleNavigation={true}
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
          style: {
            backgroundColor: "#fff",
            color: "#494949",
            margin: 0,
            borderRadius: 0,
          },
        }}
        className={classes.carousel}
      >
        {bannerData.map((item, i) => (
          <img key={i} src={item} className={classes.image} />
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
