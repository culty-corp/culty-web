
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
        order: '3',
        alignSelf : "flex-start",
        paddingTop: '10%',
        paddingLeft: '15%',
        width: '15%',
        height: '30%'
      },
      wrapNavigation: {
        order: '4',
      },
      wrapNada: {
        width: '30%',
        order: '1',
      },
      wrapperConteudo: {
        padding: '10px',
        width: '25%',
        order: '2',
        flex: '3 0px',
        alignSelf : "center",
      },
  });