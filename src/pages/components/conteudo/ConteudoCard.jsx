import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ConteudoHeader from "./ConteudoHeader";
import ConteudoActions from "./ConteudoActions";
import ConteudoMidia from "./ConteudoMidia";
import styles from "./conteudoCardStyle";
import MediaQuery from "react-responsive";
import * as Map from "../../../Maps";

class ConteudoCard extends React.Component {
  state = { expanded: false };

  expandirPostagem = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  componentDidMount = () => {
    if(this.props.postagens.length === 0) this.props.getAllObras().then(() => {
      this.props.passarPost()
    })
  }

  render() {
    const { classes, postagemAtual } = this.props;

    return (
      <div>
        { postagemAtual.titulo !== undefined ? 
        <div>
        <MediaQuery query="(min-device-width: 768px)">
          <Card className={classes.cardLarge}>
            <ConteudoHeader />
            <CardContent>
              <Typography component="p" className={classes.estiloTexto}>
                {postagemAtual.resumo}
                <br /> <br />
              {postagemAtual.filtros.map(x => (
                <span className={classes.categorias}>
                  {` ${x} `}
                </span>
              ))
              
              }
              </Typography>
            </CardContent>
            <CardContent>
                {postagemAtual.tipoMidia === "Texto" && (
                  <Typography paragraph className={classes.estiloTexto}>
                    {postagemAtual.conteudoCard}
                  </Typography>
                )}
              </CardContent>
            <ConteudoMidia />
            <ConteudoActions
              expanded={this.state.expanded}
              expandirPostagem={() => this.expandirPostagem()}
            />
          </Card>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 768px)">
          <Card className={classes.cardSmall}>
            <ConteudoHeader />
            <CardContent>
              <Typography component="p" className={classes.estiloTexto}>
                {postagemAtual.resumo}
              </Typography>
            </CardContent>
            <CardContent>
                {postagemAtual.tipoMidia === "Texto" && (
                  <Typography paragraph className={classes.estiloTexto}>
                    {postagemAtual.conteudoCard}
                  </Typography>
                )}
              </CardContent>
            <ConteudoMidia />
            <ConteudoActions
              expanded={this.state.expanded}
              expandirPostagem={() => this.expandirPostagem()}
            />
          </Card>
        </MediaQuery>
        </div>
        : <div>Aguarde...</div>
        }
      </div>
    );
  }
}

ConteudoCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = store => {
  const postagemAtual = store.posts.postagemAtual;
  const postagens = store.posts.postagens;
  return {
    postagemAtual,
    postagens
  };
};

export default withRouter(
  connect(mapStateToProps, Map.mapDispatchToProps)(withStyles(styles)(ConteudoCard))
);
