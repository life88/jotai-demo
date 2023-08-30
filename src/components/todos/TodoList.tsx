import { useAtom } from 'jotai';
import { ChangeEvent, useRef } from 'react';
import { getNewId, todosAtom } from './todosStore';

export default function TodoList() {
  const [todos, setTodos] = useAtom(todosAtom);
  const inputRef = useRef<HTMLInputElement>(null);

  const onAddTodo = () => {
    const value = inputRef.current?.value;
    if (!value) return;
    const id = getNewId();
    setTodos((prev) => [...prev, { id, text: value, isComplete: false }]);
    inputRef.current.value = '';
  };

  const onRemoveTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const onUpdateTodo = (id: number, isComplete: boolean) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, isComplete } : todo)));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const id = parseInt(e.target.value);
    const value = e.target.checked;
    onUpdateTodo(id, value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          className="border border-solid border-gray-500 py-2 px-4 rounded focus:border-blue-600 outline-none focus:shadow-md shadow-blue-200"
          ref={inputRef}
          type="text"
        />
        <button onClick={onAddTodo}>Add</button>
      </div>
      <ul className="text-left">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between">
            <label className={todo.isComplete ? 'line-through' : ''}>
              <input type="checkbox" value={todo.id} onChange={onChange} /> {todo.text}
            </label>
            <a className="text-sm cursor-pointer" onClick={() => onRemoveTodo(todo.id)}>
              Remove
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
