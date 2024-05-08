import React, { useState } from 'react';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if (input.trim()) {
            setTasks([...tasks, input]);
            setInput('');
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <div className="input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a new task"
                />
                <button onClick={addTask} className="add">Add</button>
            </div>
            <ul className="tasks">
                {tasks.map((task, index) => (
                    <li key={index} className="task">
                        <span className="text">{task}</span>
                        <div className="actions">
                            <button onClick={() => deleteTask(index)} className="del">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
