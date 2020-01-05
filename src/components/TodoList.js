import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
class TodoList extends Component {
    render() {
        return (
            <div>
                <List>
                    {this.props.data.map(todo =>
                        <ListItem key={todo.id}>
                            <Icon> drag_handle</Icon>
                            <ListItemText
                                primary={todo.name}
                            />
                            <ListItemSecondaryAction>
                                <IconButton aria-label="delete" onClick={() => this.props.handleClick(todo.id)}>
                                    <Icon>delete</Icon>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                    }
                </List>
            </div>
        );
    }
}

export default TodoList;