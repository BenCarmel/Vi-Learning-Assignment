import {useEffect ,useState } from "react";
import React from "react"; 

class ToDoList extends React.Component
{   
    constructor(props)
     {
        super (props);
        const tasks = {tdl:[{task:'Take the dog for a walk', due: 'tonight', check:false}, {task:'Shop for groceries', due: 'friday', check:false}, {task: 'Clean the living room', due: 'tomorrow', check:false}, {task: 'Call the bank', due: 'next tuesday', check:false}, {task:'Fix the toilet', due: 'immediate', check:false}, {task: 'Cook dinner', due: '1 hour', check:false} ], inputTaskValue:'', inputDueValue:''};
        this.state = tasks;
     }

     componentDidMount() // Everytime the component mounts -> the state is set according to the local storage
     {
        this.setState({tdl:JSON.parse(localStorage.getItem('tasks'))});
     }

     componentDidUpdate() // Everytime an update occurs with the component, the local storage is updated accordingly 
     {
        localStorage.setItem('tasks', JSON.stringify(this.state.tdl));
     }
    
    handleTaskChange = (event) =>
    {
        this.setState({inputTaskValue: event.target.value});
    }

    handleDueChange = (event) => 
    {
        this.setState({inputDueValue: event.target.value});
    }

    handleCheckChange = (index) =>
    {
        const checkTasks = this.state.tdl;
        checkTasks[index].check = !checkTasks[index].check;
        this.setState({tdl:checkTasks});
        localStorage.setItem('tasks', JSON.stringify(this.state.tdl));   
    }

    handleSubmit = (event) => // Submit Button Option
    {
        event.preventDefault();
        const {tdl, inputTaskValue, inputDueValue} = this.state;
        localStorage.setItem('tasks', JSON.stringify(this.state.tdl));
        this.setState ({tdl:[...tdl, {task:inputTaskValue, due:inputDueValue, check:false}], inputTaskValue, inputDueValue});
        alert ('One more thing to do...');
        this.setState({inputTaskValue:'', inputDueValue:''});  
    }

    handleDelete = (index) => // Task Removal Option
    {
        const {tdl} = this.state;
        const updatedTdl = [...tdl];
        updatedTdl.splice(index, 1);
        this.setState({tdl:updatedTdl});
        alert ('Task has been completed');
    }

    render()
    { 
        const {tdl, inputTaskValue, inputDueValue} = this.state;
        return ( 
        <div> 
        <form className="taskForm" onSubmit={this.handleSubmit}> 
        <br></br> <br></br> <br></br><br></br> <br></br> <br></br>
        <input className="textBox" type="text" placeholder = "Add task to TDL" value = {this.state.inputTaskValue} onChange={this.handleTaskChange}></input> <br></br> <br></br>
        <input className="textBox" type="text" placeholder = "When is it due?" value = {this.state.inputDueValue} onChange={this.handleDueChange}></input> <br></br> <br></br>
        <h2> <strong> {this.state.tdl.length} tasks left</strong></h2>
        <button className= "submitB" type="submit" disabled = {inputTaskValue.trim() === '' || inputDueValue.trim() === ''} value="submit" onClick={() => this.handleSubmit}> Add </button>
        </form >
        {localStorage.setItem['tasks']}
        <ul> {this.state.tdl.map((task, index) => (<li key={index} type="checkbox"><input className="checkB" type="checkbox" onChange={() =>this.handleCheckChange(index)} checked={tdl[index].check} ></input> 
        {tdl[index].task} <br></br> 
        <p className="due"> <strong> <u> {tdl[index].due} </u>  </strong> </p> 
        <button className="deleteB" onClick={() =>this.handleDelete(index)} ></button> <br></br> 
        </li>))}
        </ul>
        </div>
        );
    }


}

export default ToDoList;


          