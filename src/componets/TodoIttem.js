import React, { Component } from 'react';


export class TodoIttem extends Component {
    getStyle=()=>{
        return{
            background:"#f4f4f4",
            padding:'10px',
            fontWeight:'bold',
            borderBottom:'1px solid #ccc',
            textDecoration:this.props.todo.completed?'line-through' : 'none',
            // color:this.props.todo.completed?'green' : 'none'
            
        }
    }

    render() {
        const {id , title } = this.props.todo;
        return (
            <div style ={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} /> {title}
                    <button  onClick={this.props.delTodo.bind(this,id)} style={btnStyle} >X</button>
                </p>
               
                
            </div>
        )
    }
    
}

const btnStyle={
    
            background:"#ff0000",
            color:'#fff',
            border:'none',
            padding:'5px 8px',
            borderRadius:'50%',
            cursor:'pointer',
            float : 'right' 
    }


export default TodoIttem

