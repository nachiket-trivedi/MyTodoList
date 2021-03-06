import React,{Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Layout/Header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import About from  './components/Pages/About'

class App extends Component{
  state={todos:[
    {
      id:1,
      title:"Sleep",
      completed:false
    },
    {
      id:2,
      title:"Eat",
      completed:false
    },
    {
      id:3,
      title:"More sleep ",
      completed:false
    },
  ]}
  markComplete=(id)=>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id===id )
      {
        todo.completed=!todo.completed; 
      }
      return todo;
    })})
  }
  delTodo=(id)=>{
    this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]});
  }
  addTodo=(title)=>{
    const newTodo={
       id:uuid.v4(),
       title:title,
       completed:false  
    }
    this.setState({todos:[...this.state.todos,newTodo]});
  }
  render(){
    return (
      <Router>
      <div className="App">
      <div className="container">
        <Header></Header>
        <Route exact path="/" render={props=>(
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}></AddTodo>
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}></Todos>
          </React.Fragment>
        )}></Route>        
        <Route path="/about" component={About}></Route>   
      </div>
      </div>
      </Router> 
    ); 
  }
}

export default App;
