import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  card: {
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(90,90,90)",
    },
    borderRight: "0.1px solid white",
    borderBottom: "0.1px solid white",
  },
  cardMedia: {
    margin: "auto",
    width: "130px",
    height: "130px",
  },
  cartContent: {
    textAlign: "center",
  },
}));
function PokemonCard(props) {
  const classes = useStyles();
  const { pokemon, image } = props;
  const { id, name } = pokemon;
  return (
    <Grid item xs={12} sm={2}>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image={image}>
          {" "}
        </CardMedia>{" "}
        <CardContent className={classes.cartContent}>
          <Typography> {name} </Typography>{" "}
        </CardContent>{" "}
      </Card>{" "}
    </Grid>
  );
}
export default PokemonCard;
