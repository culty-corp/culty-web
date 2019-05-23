import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styles from "./style.js";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import LikeIcon from "@material-ui/icons/ThumbUp";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EmailIcon from "@material-ui/icons/Email";
import QuestionIcon from "@material-ui/icons/Info";
import * as Hg from "../../../assets/hg.jpg";
import Button from "@material-ui/core/Button";

class Perfil extends React.Component {
  state = { expanded: false };

  expandirPostagem = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, postagemAtual } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar src={Hg} aria-label="Recipe" className={classes.avatar} />
          }
          classes={{
            title: classes.estiloTexto,
            subheader: classes.estiloSubTitulo
          }}
          title="Humberto Gessinger"
          subheader={
            <div>
              <br />
              <Grid container flexGrow={1} spacing={16} justify="center">
                <Grid>
                  <Grid container direction="row" justify="center" item>
                    <LikeIcon className={classes.botao} /> 12
                  </Grid>
                </Grid>
                <Grid>
                  <Grid container direction="row" justify="center" item>
                    <VisibilityIcon className={classes.botao} /> 11
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  className={classes.botao}
                  color="#ff9703"
                  size="small"
                >
                  Seguir
                </Button>
                <IconButton>
                  <EmailIcon className={classes.botao} />
                </IconButton>
                <IconButton>
                  <QuestionIcon className={classes.botao} />
                </IconButton>
              </Grid>
            </div>
          }
        />
        <CardContent>
          <Typography component="p" className={classes.estiloTexto}>
            Conteúdo
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          />
        </CardActions>
      </Card>
    );
  }
}

Perfil.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = store => {
  const postagemAtual = store.posts.postagemAtual;
  return {
    postagemAtual
  };
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Perfil)));
