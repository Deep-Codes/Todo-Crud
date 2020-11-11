import React, { useState } from 'react';
import './App.css';
import TextField from './TextField';
import TodoList from './TodoList';

interface TodoItem {
  complete: boolean;
  text: string;
}

function App() {
  const [list, setList] = useState<Array<TodoItem>>([
    { text: 'Learn Javascript', complete: true },
    { text: 'Make a Todo App', complete: false },
    { text: 'HomeWork', complete: false },
    { text: 'Learn Stack', complete: false },
    { text: 'Practice Coding', complete: false },
  ]);

  const addItemList = (item: TodoItem) => {
    setList([...list, item]);
    // console.log(list);
  };

  const removeItem = (item: TodoItem) => {
    let newList = list.filter((listItem) => listItem.text !== item.text);
    // console.log(newList);
    setList([...newList]);
  };

  const updateItem = (item: TodoItem, value: string) => {
    let index = list.indexOf(item);
    list[index] = {
      complete: false,
      text: value,
    };
    setList([...list]);
  };

  return (
    <div className='App'>
      <h1>Todo Crud App</h1>
      <TextField addItemList={addItemList} />
      <TodoList list={list} removeItem={removeItem} updateItem={updateItem} />
    </div>
  );
}

export default App;
