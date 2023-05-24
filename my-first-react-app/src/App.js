import React from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

class App extends React.Component{
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
