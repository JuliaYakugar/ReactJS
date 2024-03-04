import React from 'react';
import './App.css';
import TemperatureConverter from './components/TemperatureConverter/TemperatureConverter';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <h2>Задание 1</h2>
      <TemperatureConverter />
      <h2>Задание 2</h2>
      <TodoList />
    </div>
  );
}

export default App;
