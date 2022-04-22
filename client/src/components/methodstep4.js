import React, { Component } from "react";
import { AppBar, Grid, withStyles, Paper } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const styles = {
  container: {
    display: "flex",
  },
  paper: {
    height: 200,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
  },
};

class GridComponent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Grid container spacing={2} justifyContent="space-evenly">
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              style={{ boxShadow: "none", border: "none" }}
              className={classes.paper}
            >
              <Card
                sx={{ maxWidth: 300 }}
                style={{ border: "none", boxShadow: "none" }}
              >
                <CardActionArea>
                  <Typography>
                    <h2>Stap 4</h2>
                    <p>
                      Dit is een stukje teskt om te testen en het komt uit de
                      toppen van mijn vingers. Het is laat ik moet gaan slapen.
                      Maar toch hier nog een stukje want het was niet genoeg
                    </p>
                  </Typography>
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(GridComponent);
