import React from "react";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import ToDoList from "./components/ToDoList";







class App extends React.Component{
    render() {
        return (
            <React.Fragment>
                <Header text= "Welcome to TDL - My First App"/>
                <SubHeader />
                <ToDoList />
            </React.Fragment>
        );
    }
}

export default App; 
