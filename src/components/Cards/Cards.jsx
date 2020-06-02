import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cn from "classnames"
import styles from "./Cards.module.css";

const Cards = ({ data }) => {
  if (!data) {
    return <h1>Loading....</h1>;
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={data.confirmed.value}
                duration={2.6}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {" "}
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography varient="body2">Number of Active Cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={data.recovered.value}
                duration={2.6}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {" "}
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography varient="body2">Number of Recovered Cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={data.deaths.value}
                duration={2.6}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {" "}
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography varient="body2">Number of Deaths Cases</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
