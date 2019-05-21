export default theme => ({
  root: {
    width: "100%",
    position: "fixed",
    height: "12vh",
    bottom: "0",
    backgroundColor: "#1e1e1e",
    borderTop: "solid 1px #FF8C00"
  },
  rootSmallDevice: {
    width: "100%",
    position: "fixed",
    maxHeight: "1vh",
    bottom: "0",
    backgroundColor: "#1e1e1e",
    borderTop: "solid 1px #FF8C00"
  },
  footerSections: {
    position: "relative",
    width: "85%",
    top: "0",
    margin: "3% 0% 0% 5%"
  },
  footerSectionsSmallDevice: {
    position: "relative",
    width: "85%",
    top: "0",
    margin: "3% 0% 0% 5%"
  },
  subFooter: {
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    padding: "8px 16px 8px 16px",
    marginTop: "1%",
    position: "fixed",
    bottom: "0",
    width: "100%"
  },
  subFooterSmallDevice: {
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    padding: "8px 16px 8px 16px",
    marginTop: "1%",
    position: "fixed",
    bottom: "0",
    width: "100%"
  },
  footerText: {
    color: "#ECF2EC",
    fontSize: "0.8em",
    lineHeight: 1.5
  },
  footerTextSmallDevice: {
    color: "#ECF2EC",
    fontSize: "1vh",
    lineHeight: 1.5
  }
});
