import { useAtom } from 'jotai';
import { useState } from 'react';
import BigData from '@/components/big-data';
import TodoList from '@/components/todos/TodoList';
import './App.css';
import { countAtom } from './appStore';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useAtom(countAtom);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <div>
        <button onClick={() => setNum((num) => num + 1)}>num is {num}</button>
      </div>
      <TodoList></TodoList>
      <BigData></BigData>
    </>
  );
}

export default App;
