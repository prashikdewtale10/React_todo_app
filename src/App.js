
import React ,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Todo from './componets/Todo';
import Header from './componets/layout/Header'
import AddTodo from './componets/AddTodo';
import About from './componets/pages/About'
import {v4 as uuid} from 'uuid';
import './App.css';


class App extends Component {
         state ={
          todos:[
              {
              id:uuid(),
              title:'Taking Bath',
              completed:false
          },
          {
              id:uuid(),
              title:'Taking snanks',
              completed:false
          },
          {
              id:uuid(),
              title:'Putting phone on chrage',
              completed:false
          }
        ]
        }

        // Marging as Done
        markComplete =(id)=>{
          
          this.setState({todos:this.state.todos.map(todo=>{
            if(todo.id === id){
              todo.completed=!todo.completed
            }
            return todo
          })});
          console.log('from app.js')
        }

        // Delete ToDo
          
        delTodo = (id) =>{
          this.setState({todos:[...this.state.todos.filter(todo=>
            todo.id !==id
          )]})
        }

        addTodo=(title)=>{
          const newTodo ={
             id:uuid(),
             title,
             completed:false
          }
          this.setState({todos:[...this.state.todos,newTodo]});
        }

    render(){
      console.log(this.state.todos);
  return (
    <Router>
          <div className="App">
            <div className="container">
              <Header />
              <Route exact path="/" render={props=>(
                <React.Fragment>
                    <AddTodo addTodo={this.addTodo}/>
                    <Todo todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>  
                </React.Fragment>
              )}>
              </Route>
              <Route path="/about" component={About}>

              </Route>
              
          </div>
       </div>
    </Router>

  );
}
}

export default App;
