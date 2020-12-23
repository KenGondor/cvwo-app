import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: 50,
    width: '100%'
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 17,
    flex: 1,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TaskCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container direction="row">
          <Typography >
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            variant='h3'
            >
              {props.name}
          </Typography>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
        </Grid>
      </CardContent>
    </Card>
  );
}
