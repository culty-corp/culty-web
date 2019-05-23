export default theme => ({
  cultyHeader: {
    backgroundColor: '#121212',
    minHeight: '100vh',
    display: 'flex',
    flexFlow: 'row wrap',
    textAlign: 'center',
    fontSize: 'calc(10px + 2vmin)',
    'cultyHeader > *': {
      padding: '10px',
      flex: '1 100%'
    }
  },
  wrapperFiltro: {
    position: 'absolute',
    right: '10%',
    width: '15%',
    height: '30%',
    top: '25%'
  },
  wrapperConteudo: {
    position: 'absolute',
    left: '30%',
    width: '35%',
    top: '25%'
  }
});
