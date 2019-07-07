import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';

const ListaObras = props => {
    const { titulo, postagens, classes } = props
    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    {titulo}
                </ListSubheader>
            }
            className={classes.root}
        >
            {
                postagens
                    .map(obra => (
                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary={obra.titulo} />
                        </ListItem>
                    ))
            }
        </List>
    )
}

export default ListaObras