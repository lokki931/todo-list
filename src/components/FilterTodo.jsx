import React from 'react';

let filterBtns = [
  {
    id: 1,
    name: 'all',
  },
  {
    id: 2,
    name: 'completed',
  },
  {
    id: 3,
    name: 'uncompleted',
  },
];

const FilterTodo = ({ todos, setFilterTodos, activeFilterTodos, setActiveFilterTodos }) => {
  const filter = (el) => {
    switch (el.name) {
      case 'completed':
        setFilterTodos({ todos: todos.filter((el) => el.completed === true) });
        setActiveFilterTodos(el.id);
        break;
      case 'uncompleted':
        setFilterTodos({ todos: todos.filter((el) => el.completed === false) });
        setActiveFilterTodos(el.id);
        break;
      default:
        setFilterTodos({ todos });
        setActiveFilterTodos(1);
        break;
    }
  };

  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-sm-7 mt-3 justify-content-center d-flex">
        {filterBtns?.map((el) => (
          <button
            key={el.id}
            className={`mx-1 btn ${activeFilterTodos === el.id ? 'btn-success' : 'btn-secondary'}`}
            onClick={() => filter(el)}>
            {el.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTodo;
