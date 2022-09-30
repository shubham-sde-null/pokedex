import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyle = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "black",
  },
  link: {
    textDecoration: "none",
  },
  title: {
    color: "white",
    cursor: "pointer",
  },
}));

function AppNavigator() {
  const classes = useStyle();
  return (
    <AppBar className={classes.AppBar} position="fixed">
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography className={classes.title} variant="h6">
            {" "}
            Pokedex{" "}
          </Typography>{" "}
        </Link>{" "}
        <Link to="/favourites" className={classes.link}>
          <Typography
            className={classes.title}
            style={{ marginLeft: "15px" }}
            variant="h6"
          >
            {" "}
            Favourites{" "}
          </Typography>{" "}
        </Link>{" "}
      </Toolbar>{" "}
    </AppBar>
  );
}

export default AppNavigator;
