import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import AddTodo  from './Components/AddTodo/AddTodo';
import ListTodo from './Components/ListTodo/ListTodo';
import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'Выучить Redux',
      description: 'Описание задания',
      status: true,
    },
    {
      id: 2,
      title: 'Провести собрание',
      description: 'Встреча состоится в 18.00',
      status: true,
    },
    {
      id: 3,
      title: 'Изучить TypeScript',
      description: 'Интерфейсы и типы в TypeScript',
      status: true,
    },
  ]);

  return (
    <Container>
     <Header title={todo.length}/>
     <AddTodo todo={todo} setTodo={setTodo}/>
     <ListTodo todo={todo} setTodo={setTodo}/>
    </Container>
  );
}

export default App;
