import React, { Component } from 'react';
import PropTypes from "prop-types";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Map from '../../../Maps';
import withStyles from "@material-ui/core/styles/withStyles";
import ListaObras from './ListaObras'
import styles from "../registro/style.js";

class Perfil extends Component {


  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  state = {
    expanded: false
  }

  render() {
    const { classes, usuarioPerfil, postagens, usuarioLogado } = this.props;

    const { expanded } = this.state

    return (
      <div className={classes.card}>
        <Typography
            className={classes.estiloTexto}
            component="h1"
            variant="h5"
          >
            Perfil
          </Typography>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {usuarioPerfil.nome.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={usuarioPerfil.nome}
          subheader={usuarioPerfil.email}
        />
        <CardContent>
        <Typography
            className={classes.estiloTexto}
          >
            {usuarioPerfil.descricao}
          </Typography>
          
        </CardContent>
        <CardActions disableSpacing>
          {
            usuarioLogado.id === usuarioPerfil.id
            ? 
            <IconButton aria-label="Editar perfil" onClick={ () => {
              this.props.alteraUsuarioPerfil(usuarioPerfil)
              this.props.history.push('/perfilEditar')
            } }>
              <EditIcon />
            </IconButton>
            : <div></div>
          }
          
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <ListaObras
            titulo={"Obras curtidas"}
            postagens={postagens.filter(x => usuarioPerfil.listaObrasGostadas.indexOf(x.id) !== -1)}
            classes={classes} />

          <ListaObras
            titulo={"Obras postadas"}
            postagens={postagens.filter(x => x.usuario.id === usuarioPerfil.id)}
            classes={classes} />
          </CardContent>
        </Collapse>
      </Card>
      </div>
    );
  }
}

Perfil.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = store => {
  const postagens = store.posts.postagens;
  const usuarioLogado = store.usuario.usuarioLogado
  const usuarioPerfil = store.usuario.usuarioPerfil
  return {
    postagens,
    usuarioLogado,
    usuarioPerfil
  };
};

export default withRouter(
  connect(mapStateToProps, Map.mapDispatchToProps)(withStyles(styles)(Perfil))
);