import { List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import Button from '@material-ui/core/Button';
import db from './firebase';
import "./Todo.css";
function Todo(props) {
    return (
        <div>
            <List>
                <ListItem>
                    <ListItemText primary={props.text} secondary="do it"></ListItemText>
                </ListItem>
                <button variant="contained" color="secondary" onClick={e => db.collection('todos').doc(props.text.id).delete()}>Delete this task</button>
            </List>
        </div>
    )
}

export default Todo
