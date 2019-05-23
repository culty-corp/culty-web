import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './style.js';
import MediaQuery from 'react-responsive';
import { Typography } from '@material-ui/core';

class Footer extends React.Component {
  getYear() {
    const dateToday = new Date();
    return dateToday.getFullYear();
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <MediaQuery query="(min-device-width: 768px)">
          <div className={classes.root}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={4}>
                <Typography
                  className={[classes.footerText, classes.footerSections]}
                >
                <a href="#" target="_top" className={classes.textLink}>
                  Política do Site
                </a>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  className={[classes.footerText, classes.footerSections]}
                >
                <a href="#" target="_top" className={classes.textLink}>
                  Política de Privacidade
                </a>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  className={[classes.footerText, classes.footerSections]}
                ><a href="#" target="_top" className={classes.textLink}>
                Sobre o Culty
              </a>
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
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 768px)">
          <div className={classes.root}>
            <Grid container spacing={0}>
              <Grid className={classes.subFooter} item xs={12}>
                <span>
                  <Typography className={classes.footerText}>
                    © {this.getYear()} Culty. Todos os direitos reservados.
                  </Typography>
                </span>
              </Grid>
            </Grid>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
