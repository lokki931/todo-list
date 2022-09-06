import React from 'react'
import ItemTodo from './ItemTodo';

const ListTodo = ({ todos, setTodos }) => {
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
        <div className='row justify-content-center align-items-center'>
            <div className='col-sm-5 mt-3'>
                <ul className='list-group'>
                    {todos.map(todo =>
                        <ItemTodo
                            key={todo.id}
                            handleCompleted={handleCompleted}
                            handleRemove={handleRemove}
                            todo={todo} />
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ListTodo
