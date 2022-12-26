import React from 'react';
import { useSelector } from 'react-redux';
import ItemTodo from './ItemTodo';
import FilterTodo from './FilterTodo';

const ListTodo = () => {
  let todos = useSelector((state) => state.todosPage.todos);
  const [filterTodos, setFilterTodos] = React.useState({ todos });
  const [activeFilterTodos, setActiveFilterTodos] = React.useState(1);

  React.useEffect(() => {
    setFilterTodos({ todos });
    setActiveFilterTodos(1);
  }, [todos]);

  if (todos.length === 0) return;

  return (
    <>
      <FilterTodo
        todos={todos}
        setFilterTodos={setFilterTodos}
        activeFilterTodos={activeFilterTodos}
        setActiveFilterTodos={setActiveFilterTodos}
      />
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-7 mt-3">
          <ul className="list-group">
            {filterTodos.todos?.map((todo) => (
              <ItemTodo key={todo.id} {...todo} />
            ))}
            <p className="mt-3">Todos count: {filterTodos.todos.length}</p>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListTodo;
