import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ConteudoHeader from './ConteudoHeader'
import ConteudoActions from './ConteudoActions'
import ConteudoMidia from './ConteudoMidia'


const styles = theme => ({
  card: {
    maxWidth: 400,
    backgroundColor: '#1e1e1e',
  },
  estiloTexto: {
    color: '#ECF2EC'
  }
});

class Conteudo extends React.Component {
  state = { expanded: false };

  expandirPostagem = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, postagemAtual } = this.props;

    return (
      <Card className={classes.card}>
        <ConteudoHeader />
        <CardContent>
          <Typography component="p" className={classes.estiloTexto}>
            {postagemAtual.resumo}
          </Typography>
        </CardContent>
        <ConteudoMidia />
        <ConteudoActions expanded={this.state.expanded} expandirPostagem={() => this.expandirPostagem()} />
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {
              postagemAtual.tipoMidia === "Texto" &&
              <Typography paragraph className={classes.estiloTexto}>
                {postagemAtual.conteudo}
              </Typography>
            }
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

Conteudo.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = store => {
  const postagemAtual = store.posts.postagemAtual;
  return {
    postagemAtual
  };
};

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(Conteudo))
);