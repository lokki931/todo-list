import { useState } from 'react';
import FormTodo from './components/FormTodo';
import ListTodo from './components/ListTodo';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="app">
      <div className='container'>
        <FormTodo todos={todos} setTodos={setTodos} />
        <ListTodo todos={todos} setTodos={setTodos} />
      </div>

    </div>
  );
}

export default App;
