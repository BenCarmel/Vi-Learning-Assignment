import { useState } from "react";
import React from "react"; 

class ToDoList extends React.Component
{   
    constructor(props)
     {
        super (props);
        this.state = {tasks: ['Take the dog for a walk', 'Shop for groceries', 'Clean the living room', 'Call the bank', 'Fix the toilet', 'Cook dinner'], inputValue: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});
    }

    handleSubmit(event) 
     {
        event.preventDefault();  
        const {tasks, inputValue} = this.state;
        this.setState ({tasks:[...tasks, inputValue], inputValue: ''});
        alert ('Task has been added');
    }

    handleDelete(index)
    {
        const {tasks} = this.state;
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        this.setState({tasks:updatedTasks});
    }

    render()
    { 
        const {tasks, inputValue} = this.state;
        return ( 
        <div> 
        <form onSubmit={this.handleSubmit}> 
        <label>Add task to TDL </label> <br></br> 
        <input type="text" id="taskAdder" value = {inputValue} onChange={this.handleChange}></input> <br></br> <br></br>
        <button className= "submitB" type="submit" value="submit" onClick={this.handleSubmit}> Add </button>
        </form >
        <ul> {tasks.map((tasks) => (<li key={tasks.id} type="checkbox"><input type="checkbox"></input>
        {tasks}
        <button className="deleteB" onClick={() =>this.handleDelete(tasks.id)} ></button>
        </li>))}
        </ul>
        </div>
        );
    }
}

export default ToDoList;


          