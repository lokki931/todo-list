import React from 'react'

const ItemTodo = ({ todo, handleRemove, handleCompleted }) => {
    return (
        <li className='list-group-item d-flex justify-content-between'>
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
}

export default ItemTodo
