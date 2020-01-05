import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = { input: '' };
    }
    render() {
        return (
            <TextField type='text' className='add-todo-input' value={this.state.input} onChange={e => this.setState({ input: e.target.value })}
                label="Add New Todo"
                onKeyPress={e => {
                    if (e.key === 'Enter') {
                        this.props.handleSubmit(this.state.input);
                        this.setState({ input: '' })
                    }
                }}
            />

        );
    }
}

export default TodoInput;