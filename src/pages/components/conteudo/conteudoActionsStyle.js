export default theme => ({
  botaoLike: {
    position: 'absolute',
    left: '5%',
    bottom: '2%',
    color: '#ff9703'
  },
  botaoShare: {
    position: 'absolute',
    left: '45%',
    right: 0,
    margin: '0 auto',
    bottom: '2%',
    color: '#ff9703'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    color: '#FF8C00',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  actions: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#1e1e1e',
    height: '10vh'
  },
  botaoDislike: {
    color: '#ff9703',
    position: 'absolute',
    right: '5%',
    bottom: '2%'
  }
});
