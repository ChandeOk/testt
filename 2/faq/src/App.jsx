import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import FaqItem from './components/FaqItem';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FaqItem
        question={'Как забронировать кабинет?'}
        answer={'Это можно сделать на странице расписания!'}
      />
    </>
  );
}

export default App;
