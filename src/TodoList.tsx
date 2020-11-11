import React, { useState } from 'react';
import edit from './assets/edit.svg';
import remove from './assets/trash.svg';
import add from './assets/add.svg';

interface TodoItem {
  complete: boolean;
  text: string;
}

interface TodoArr {
  list: Array<TodoItem>;
  removeItem: (item: TodoItem) => void;
  updateItem: (item: TodoItem, value: string) => void;
}

const TodoList: React.FC<TodoArr> = ({ list, removeItem, updateItem }) => {
  const handleRemove = (item: TodoItem) => {
    return (event: React.MouseEvent) => {
      event.preventDefault();
      removeItem(item);
    };
  };
  const [toggle, setToggle] = useState(false);
  const [upText, setUpText] = useState('');
  const [upInput, setUpInput] = useState('');
  const toggleUpdateInput = (item: TodoItem) => {
    return (event: React.MouseEvent) => {
      event.preventDefault();
      setUpText(item.text);
      setToggle(true);
      /// Send Updated Item
      if (toggle) {
        if (upInput !== '') {
          updateItem(item, upInput);
        }
        setUpInput('');
        setToggle(false);
      }
    };
  };
  return (
    <>
      {/* <h1>Things ToDo</h1> */}
      {list.map((item) => (
        <div key={item.text} className='TodoItem'>
          {!toggle ? (
            <span>{item.text}</span>
          ) : item.text === upText ? (
            <input
              defaultValue={item.text}
              onChange={(e) => setUpInput(e.target.value)}
            ></input>
          ) : (
            <span>{item.text}</span>
          )}
          <div>
            <button onClick={toggleUpdateInput(item)}>
              {!toggle ? (
                <img src={edit} alt='edit button' />
              ) : item.text === upText ? (
                <img src={add} alt='' />
              ) : (
                <img src={edit} alt='' />
              )}
            </button>
            <button onClick={handleRemove(item)}>
              <img src={remove} alt='edit button' />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;
