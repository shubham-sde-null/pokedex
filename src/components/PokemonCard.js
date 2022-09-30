import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
const useStyles = makeStyles((theme) => ({
  card: {
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(90,90,90)",
    },
    borderRight: "0.1px solid #eb4d4b",
    borderBottom: "0.1px solid #eb4d4b",
  },
  cardMedia: {
    margin: "auto",
    width: "130px",
    height: "130px",
  },
  cartContent: {
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
  },
}));
function PokemonCard(props) {
  const classes = useStyles();
  const { pokemon, image } = props;
  const { id, name } = pokemon;
  return (
    <Grid item xs={12} sm={2} key={id}>
      {/* //here we are wrapping the pokemon card into the link component so that whenever we click on the pokemon card we will be show the details of that pokemon card */}
      <Link to={"/pokemon/" + id} className={classes.link}>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} image={image}>
            {" "}
          </CardMedia>{" "}
          <CardContent className={classes.cartContent}>
            <Typography> {name} </Typography>{" "}
          </CardContent>{" "}
        </Card>{" "}
      </Link>
    </Grid>
  );
}
export default PokemonCard;
