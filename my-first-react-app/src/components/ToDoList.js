import React from "react"; 

class ToDoList extends React.Component
{   
    constructor(props)
     {
        super (props); 
        const tasks = {tdl:[{task: null, due: null, check:false}], inputTaskValue:'', inputDueValue:''};
        this.state = tasks;
     }

    // Everytime the component mounts -> its state is set according to the local storage
     componentDidMount() 
     {
        if (localStorage.getItem('tasks')===null)
        {
            this.setState({tdl:[]});
        }
        else
        {
            this.setState({tdl:JSON.parse(localStorage.getItem('tasks'))});
        }
     }

     // Everytime an update occurs with the component, the local storage updates accordingly
    componentDidUpdate()  
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

        
    // Submit Button Option
    handleSubmit = (event) => 
    {
        event.preventDefault();
        const {tdl, inputTaskValue, inputDueValue} = this.state;
        localStorage.setItem('tasks', JSON.stringify(this.state.tdl));
        this.setState ({tdl:[...tdl, {task:inputTaskValue, due:inputDueValue, check:false}], inputTaskValue, inputDueValue});
        alert ('One more thing to do...');
        this.setState({inputTaskValue:'', inputDueValue:''});  
    }

    // Task Removal Option
    handleDelete = (index) => 
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
        <ul> {this.state.tdl.map((task, index) => 
        (<li key={index} type="checkbox"><input className="checkB" type="checkbox" onChange={() =>this.handleCheckChange(index)} checked={tdl[index].check} ></input> 
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


          


          