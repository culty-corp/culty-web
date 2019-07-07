import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import styles from "./style";

const ListaObras = props => {
    const { titulo, postagens, classes } = props
    return (
        <List
            className={classes.estiloTexto}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader className={classes.estiloSubTitulo} component="div" id="nested-list-subheader">
                    {titulo}
                </ListSubheader>
            }
            className={classes.root}
        >
            {
                postagens
                    .map(obra => (
                        <ListItem button>
                            <ListItemIcon className={classes.botaoExpandir}>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText classes={ {primary:classes.estiloTexto}} primary={obra.titulo} />
                        </ListItem>
                    ))
            }
        </List>
    )
}

export default ListaObras