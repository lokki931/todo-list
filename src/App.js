import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('')
  const handleAdd = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          body: text,
          completed: false
        }
      ]);
      setText('');
    }

  }
  const handleCompleted = (todoId) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === todoId)
          return {
            ...todo,
            completed: !todo.completed
          };
        return todo;
      })
    )
  }

  const handleRemove = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }
  return (
    <div className="app">
      <div className='container'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-sm-4 mt-5'>
            <form className='input-group' onSubmit={(e) => handleAdd(e)}>
              <input
                type='text'
                className='form-control'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Text todo...'
              />
              <button
                type='sumit'
                className='btn btn-primary'
              >Add Todo</button>
            </form>
          </div>
        </div>
        <div className='row justify-content-center align-items-center'>
          <div className='col-sm-5 mt-3'>
            <ul className='list-group'>
              {todos.map(todo => {
                return (
                  <li key={todo.id} className='list-group-item d-flex justify-content-between'>
                    <input
                      className='form-check-input me-2'
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleCompleted(todo.id)}
                    />
                    <span className='me-auto'>{todo.body}</span>
                    <button
                      type="button"
                      className='btn-close'
                      aria-label="Close"
                      onClick={() => handleRemove(todo.id)}
                    ></button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
