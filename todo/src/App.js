import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div>
      <h1>To-Dos:</h1>
      <TodoList />
    </div>
  );
}

export default App;
