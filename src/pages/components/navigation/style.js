import * as cores from '../../../utils/cores'

export default theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    position: "relative",
    marginLeft: -22,
    marginRight: 10
  },
  logo: {
    position: "absolute",
    zIndex: -10,
    left: 0,
    right: 0,
    margin: "0 auto",
    top: 4
  },
  appbar: {
    position: "absolute",
    top: "0",
    backgroundColor: "#1e1e1e"
  },
  list: {
    width: "25%"
  },
  paper: {
    background: "#1e1e1e"
  },
  primary: {
    color: "#ECF2EC"
  },
  icon: {
    color: cores.laranja
  }
});
