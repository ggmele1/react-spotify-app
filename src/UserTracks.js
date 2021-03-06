import React from "react";
import "./User.css";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const UserTracks = (props) => {
  const classes = useStyles();
  const usersData = props.items;
  let count = 1;
  const tracksData = usersData.map((artist) => (
    <div className={classes.root}>
      <Grid
        container
        spacing={6}
        className="grid"
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item xs={3} className="artist-info">
          <Grid item xs={3}>
            <Typography variant="h5" align="left" className="count">
              #{count++}
            </Typography>
          </Grid>
          <Grid item xs={3} fontWeight="fontWeightBold" m={1}>
            <Typography variant="h5" className="artistName">
              {artist.name}
            </Typography>
            <Typography variant="h6" className="artistName">
              {artist.artists[0].name}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <a
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={artist.album.images[0].url}
              alt="artist"
              className="image"
            />
          </a>
        </Grid>
      </Grid>
    </div>
  ));
  return (
    <Container>
      <div>
        <Typography
          variant="h4"
          align="center"
          className="heading heading-margin"
        >
          Your Top Favorite Tracks
        </Typography>
        {tracksData}
      </div>
    </Container>
  );
};

export default UserTracks;
