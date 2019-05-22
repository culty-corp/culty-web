import React, { Component } from "react";
import ConteudoCard from "../components/conteudo/ConteudoCard";
import * as Map from "../../Maps";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Filtro from "../components/filtro/Filtro";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style.js";
import PropTypes from "prop-types";
import SignIn from "../components/signIn/SignIn";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import CriarConteudo from "../components/novoConteudo/criarConteudo";
import MediaQuery from "react-responsive";
import ConteudoActions from "../components/conteudo/ConteudoActions";
import ConteudoHeader from "../components/conteudo/ConteudoHeader";
import ConteudoMidia from "../components/conteudo/ConteudoMidia";
import ConteudoPlayer from "../components/conteudo/ConteudoPlayer";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      // <div>
      //   <MediaQuery query="(min-device-width: 768px)">
      //     <div>
      //       <div className={classes.cultyHeader}>
      //         <div className={classes.wrapNavigation}>
      //           <Navigation />
      //         </div>
      //         <div className={classes.wrapperFiltro}>
      //           <Filtro />
      //         </div>
      //         <div className={classes.wrapperConteudo}>
      //           <ConteudoCard />
      //         </div>
      //         {/* <div>
      //         <SignIn />
      //         <CriarConteudo />
      //       </div> */}
      //       </div>
      //     </div>
      //     <div>
      //       <Footer />
      //     </div>
      //   </MediaQuery>
      //   <MediaQuery query="(max-device-width: 768px)">
      //     <div>
      //       <div className={classes.cultyHeader}>
      //         <div className={classes.wrapNavigation}>
      //           <Navigation />
      //         </div>
      //         <div className={classes.wrapperFiltro}>
      //           <Filtro />
      //         </div>
      //         <div className={classes.wrapperConteudo}>
      //           <ConteudoCard />
      //         </div>
      //       </div>
      //     </div>
      //     <div>
      //       <Footer />
      //     </div>
      //   </MediaQuery>
      // </div>
      <ConteudoCard />
      //  <ConteudoActions />
      //  <ConteudoHeader />
      //<ConteudoMidia />
      //<ConteudoPlayer />
    );
  }
}

const mapStateToProps = store => {
  const posts = store.posts;
  return {
    ...posts
  };
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(
  connect(mapStateToProps, Map.mapDispatchToProps)(withStyles(styles)(App))
);
