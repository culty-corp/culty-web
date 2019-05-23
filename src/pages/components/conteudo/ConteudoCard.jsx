import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ConteudoHeader from "./ConteudoHeader";
import ConteudoActions from "./ConteudoActions";
import ConteudoMidia from "./ConteudoMidia";
import styles from "./conteudoCardStyle";
import MediaQuery from "react-responsive";

class ConteudoCard extends React.Component {
  state = { expanded: false };

  expandirPostagem = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, postagemAtual } = this.props;

    return (
      <div>
        <MediaQuery query="(min-device-width: 768px)">
          <Card className={classes.cardLarge}>
            <ConteudoHeader />
            <CardContent>
              <Typography component="p" className={classes.estiloTexto}>
                {postagemAtual.resumo}
              </Typography>
            </CardContent>
            <ConteudoMidia />
            <ConteudoActions
              expanded={this.state.expanded}
              expandirPostagem={() => this.expandirPostagem()}
            />
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                {postagemAtual.tipoMidia === "Texto" && (
                  <Typography paragraph className={classes.estiloTexto}>
                    {postagemAtual.conteudoCard}
                  </Typography>
                )}
              </CardContent>
            </Collapse>
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
            <ConteudoMidia />
            <ConteudoActions
              expanded={this.state.expanded}
              expandirPostagem={() => this.expandirPostagem()}
            />
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                {postagemAtual.tipoMidia === "Texto" && (
                  <Typography paragraph className={classes.estiloTexto}>
                    {postagemAtual.conteudoCard}
                  </Typography>
                )}
              </CardContent>
            </Collapse>
          </Card>
        </MediaQuery>
      </div>
    );
  }
}

ConteudoCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = store => {
  const postagemAtual = store.posts.postagemAtual;
  return {
    postagemAtual
  };
};

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(ConteudoCard))
);