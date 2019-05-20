import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, Hidden } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    backgroundColor: '#1e1e1e',
    borderTop: 'solid 3px #FF8C00',
    paddingTop: '16px',
    overflowX: 'hidden',
  },
  footerSections: {
      margin: '0 16px',
  },
  subFooter: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    padding: '8px 16px 8px 16px',
    marginTop: '8px',
    textAlign: 'center',
  },
  footerText: {
    color: '#ECF2EC',
    fontSize: '14px',
    lineHeight: 1.5,
  },
  textLink: {
    color: '#ECF2EC',
    fontSize: '14px',
  },
})

class Footer extends React.Component {

  getYear() {
    const dateToday = new Date()
    return dateToday.getFullYear()
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={4}>
            <Typography className={[classes.footerText, classes.footerSections]}>
              O Culty é uma rede social para artistas independentes e amantes de arte. 
              Artistas compartilham seu último trabalho artístico cultural e têm visibilidade 
              sem depender de quantidade de seguidores. Apreciadores exploram, 
              livremente, todos os tipos de arte, podendo filtrar por seus interesses!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography className={[classes.footerText, classes.footerSections]}>
              Contato para dúvidas e sugestões:
              <p>contato@culty.com</p>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography className={[classes.footerText, classes.footerSections]}>
              <a href="#" target="_top" className={classes.textLink}>Sobre o Culty</a>
              <p><a href="#" target="_top" className={classes.textLink}>Política do Site</a></p>
              <p><a href="#" target="_top" className={classes.textLink}>Política de Privacidade</a></p>
            </Typography>
          </Grid>
          <Grid className={classes.subFooter} item xs={12}>
            <span><Typography className={classes.footerText}>© {this.getYear()} Culty. Todos os direitos reservados.</Typography></span>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Footer)