import {
  Box,
  Button,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { useHistory } from "react-router";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyle = makeStyles({
  image: {
    height: 150,
  },
  component: {
    marginTop: 12,
    backgroundColor: "#fff",
  },
  deal: {
    padding: "15px 20px",
    display: "flex",
  },
  dealText: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: "32px",
    marginRight: 25,
  },
  timer: {
    color: "#7f7f7f",
    marginLeft: 10,
    alignItems: "center",
    display: "flex",
  },
  button: {
    marginLeft: "auto",
    borderRadius: 2,
    fontSize: 13,
  },
  text: {
    marginTop: 5,
    fontSize: 14,
  },
  wrapper: {
    padding: "35px 15px",
  },
});

const Slide = ({ timer, title, products }) => {
  const classes = useStyle();
  const history = useHistory();
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className={classes.timer}>
        {hours}:{minutes}:{seconds}
      </span>
    );
  };

  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealText}>{title}</Typography>
        {timer && (
          <>
            <img src={timerURL} alt="" style={{ width: "24px" }} />

            <Countdown
              date={Date.now() + 86400000}
              renderer={renderer}
            ></Countdown>
          </>
        )}
        <Button variant="contained" color="primary" className={classes.button}>
          view All
        </Button>
      </Box>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        keyBoardControl={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={["mobile", "tablet"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((item) => (
          <Box
            textAlign="center"
            className={classes.wrapper}
            onClick={() => history.push(`/product/${item.id}`)}
          >
            <img src={item.url} alt="loading.." className={classes.image} />
            <Typography
              className={classes.text}
              style={{ fontWeight: 600, color: "#212121" }}
            >
              {item.title.shortTitle}
            </Typography>
            <Typography className={classes.text} style={{ color: "green" }}>
              {item.discount}
            </Typography>
            <Typography
              className={classes.text}
              style={{ color: "#212121", opacity: 0.6 }}
            >
              {item.tagline}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slide;
