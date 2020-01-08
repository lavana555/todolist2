import React from 'react';
import './App.css';
import ToDoListHeader from './ToDoListHeader';
import ToDoListTasks from './ToDoListTasks';
import ToDoListFooter from './ToDoListFooter';

class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                   <ToDoListHeader />
                   <ToDoListTasks />
                   <ToDoListFooter />
                   
                    
                </div>
            </div>
        );
    }
}

export default App;

