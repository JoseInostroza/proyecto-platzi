import React from 'react';
import './App.css';
import {TodoList} from "./Components/TodoList"
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { CreateButton } from './Components/CreateButton';
import { TodoItem } from './Components/TodoItem';

const defaultTodos=[
  {text:"Learn React",completed:true},
  {text:"Learn Node",completed:false},
  {text:'Estrategias de marketing', completed:false},
  {text:'Hacer cositas', completed:false}
]

function App() {
  return (
    <React.Fragment >
      <TodoCounter total={8} complited={5}/>

      <TodoSearch/>
        {defaultTodos.map( todo => 
          (<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>)
        )}
      <TodoList>
        <TodoItem/>
      </TodoList>

      <CreateButton/>
    </React.Fragment>
  );
}


export {App}