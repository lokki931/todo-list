import { useDispatch } from 'react-redux';
import { toggle, remove } from '../store/todosSlice';

const ItemTodo = ({ id, body, completed }) => {
    const dispatch = useDispatch();
    return (
        <li className='list-group-item d-flex justify-content-between'>
            <input
                className='form-check-input me-2'
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggle({ id }))}
            />
            <span className='me-auto'>{body}</span>
            <button
                type="button"
                className='btn-close'
                aria-label="Close"
                onClick={() => dispatch(remove({ id }))}
            ></button>
        </li>
    )
}

export default ItemTodo
