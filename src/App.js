import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import './App.css'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      idCount: 0,
    };
  }

  addTodo(todoName) {
    this.setState(prevState => {
      const newTodos = prevState.todos.slice().concat({
        name: todoName,
        id: prevState.idCount
      })
      localStorage.setItem('todos',JSON.stringify(newTodos))
      localStorage.setItem('idCount',prevState.idCount + 1)
      return {
        todos: newTodos,
        idCount: prevState.idCount + 1,
        input: ''
      }
    })
  }
  deleteTodo(todoId) {
    this.setState(prevState => {
      const newTodos = prevState.todos.slice().filter(todo => todo.id !== todoId)
      localStorage.setItem('todos',JSON.stringify(newTodos))
      return {
        todos: newTodos,
        idCount: prevState.idCount + 1,
      }
    })
  }
  componentDidMount(){
    const todos =JSON.parse(localStorage.getItem('todos'))|| [];  // if this is no return empty array
    const idCount = localStorage.getItem('idCount') || 0 ;// if this is no return empty ZERO
    this.setState({
      todos,
      idCount,
    })
  }
  render() {
    return (
      <div className='App'>
        <Card className='main-container'>
          <TodoInput handleSubmit ={this.addTodo.bind(this)} />
          <ul>
            <TodoList data = {this.state.todos} handleClick={this.deleteTodo.bind(this)}/>
          </ul>
        </Card>
      </div>
    );
  }
}
export default App;