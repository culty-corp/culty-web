import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import styles from "./style.js";
import MediaQuery from "react-responsive";

class Footer extends React.Component {
  getYear() {
    const dateToday = new Date();
    return dateToday.getFullYear();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <MediaQuery query="(min-device-width: 768px)">
          <Grid container spacing={0}>
            <Grid item xs={12} sm={4}>
              <Typography
                className={[classes.footerText, classes.footerSections]}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                tempus mi. Etiam hendrerit mollis ante et faucibus. Duis
                porttitor enim vel varius posuere.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                className={[classes.footerText, classes.footerSections]}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                tempus mi. Etiam hendrerit mollis ante et faucibus. Duis
                porttitor enim vel varius posuere.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                className={[classes.footerText, classes.footerSections]}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                tempus mi. Etiam hendrerit mollis ante et faucibus. Duis
                porttitor enim vel varius posuere.
              </Typography>
            </Grid>
            <Grid className={classes.subFooter} item xs={12}>
              <span>
                <Typography className={classes.footerText}>
                  © {this.getYear()} Culty. Todos os direitos reservados.
                </Typography>
              </span>
            </Grid>
          </Grid>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 768px)">
          <Grid container spacing={0}>
            <Grid>
              <Typography
                className={[
                  classes.footerTextSmallDevice,
                  classes.footerSectionsSmallDevice
                ]}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                tempus mi. Etiam hendrerit mollis ante et faucibus. Duis
                porttitor enim vel varius posuere.
              </Typography>
            </Grid>
            <Grid className={classes.subFooterSmallDevice} item xs={12}>
              <span>
                <Typography className={classes.footerTextSmallDevice}>
                  © {this.getYear()} Culty. Todos os direitos reservados.
                </Typography>
              </span>
            </Grid>
          </Grid>
        </MediaQuery>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
