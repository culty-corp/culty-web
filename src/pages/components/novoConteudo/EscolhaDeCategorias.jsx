import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import withStyles from "@material-ui/core/styles/withStyles";
import * as cores from "../../../utils/cores";

const styles = theme => ({
  root: {
    width: '100%',
    color: cores.corTexto,
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
    overflowX: 'auto',
    backgroundColor: cores.cinzaClaro,
    marginBottom: theme.spacing.unit * 2,
  },
  table: {
    minWidth: 100,
    color: cores.corTexto,
  },
});

class EscolhaDeCategorias extends React.Component {

  state = {
    rows: [{ name: '#rockBebe' }, { name: '#pagoFunk' }]
  }

  render() {
    const { classes, rows } = this.props;
    return (
      <div className={classes.root}>
        {
          rows.length > 0 ?
            <Paper className={classes.paper}>
              <Table className={classes.table} size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Categorias</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
            : <div></div>}
      </div>
    );
  }
}

export default withStyles(styles)(EscolhaDeCategorias)