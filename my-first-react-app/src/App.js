import React from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

class App extends React.Component{
    componentDidMount()
    {
        let count = 1;
        if (count == 1)
        {
            alert ("Welcome Back! Let's get some things done!");
            count++;
        }
    } 
    
    render() {
        return (
            <React.Fragment>
                <Header />
                <ToDoList />
            </React.Fragment>
        );
    }

}

export default App; 
