import React ,{Component} from 'react';
import Todoitem from './TodoIttem'
class Todo extends Component {
  
      render(){

        
        console.log(this.props.todos)

         return this.props.todos.map((todo)=>{
           return(<Todoitem  key ={todo.id} todo={todo} markComplete={this.props.markComplete}  delTodo={this.props.delTodo}/>)

   });
}
}
export default Todo;
