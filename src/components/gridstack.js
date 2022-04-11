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
        <Grid container spacing={8} justifyContent="space-evenly">
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
                  <CardMedia
                    component="img"
                    height="125"
                    image="https://i.postimg.cc/pTTzGSb5/export.png"
                    alt="export"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Export
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
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
                  <CardMedia
                    component="img"
                    height="125"
                    image="https://i.postimg.cc/g2VVnRHj/apple.png"
                    alt="apple"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Vers
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
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
                  <CardMedia
                    component="img"
                    height="125"
                    image="https://i.postimg.cc/HL16NdBc/quality.png"
                    alt="quality"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Kwaliteit
                    </Typography>
                  </CardContent>
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
