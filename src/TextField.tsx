import React, { useState } from 'react';
import add from './assets/add.svg';

interface TodoItem {
  complete: boolean;
  text: string;
}

interface TextInterface {
  addItemList: (item: TodoItem) => void;
}

const TextField: React.FC<TextInterface> = ({ addItemList }) => {
  const [val, setVal] = useState<string>('');
  const sendItem = (val: string) => {
    return (event: React.MouseEvent) => {
      event.preventDefault();
      console.log(val);
      addItemList({ text: val, complete: false });
    };
  };
  return (
    <div className='TextField'>
      <input
        placeholder='Enter a Todo'
        onChange={(e) => setVal(e.target.value)}
      ></input>
      <button onClick={sendItem(val)}>
        <img src={add} alt='' />
      </button>
    </div>
  );
};

export default TextField;
