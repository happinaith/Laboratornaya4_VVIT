import React, { useState } from 'react'
import './App.css';
import Header from './Functions/Header/Header'
import TodoAdd from './Functions/TodoAdd/TodoAdd'
import TodoList from './Functions/TodoList/TodoList'
import { Container } from 'react-bootstrap'

function App() {

  const [todo, setTodo] = useState([
    {
      id : 1,
      title: 'Первая задача',
      status: true
    },
  ])

  return (
    <Container>
      <Header />
      <TodoList todo={todo} setTodo={setTodo}/>
      <TodoAdd todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
