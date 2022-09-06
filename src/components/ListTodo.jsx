import { useSelector } from 'react-redux';
import ItemTodo from './ItemTodo';

const ListTodo = () => {
    const todos = useSelector(state => state.todosPage.todos);

    return (
        <div className='row justify-content-center align-items-center'>
            <div className='col-sm-5 mt-3'>
                <ul className='list-group'>
                    {todos.map(todo =>
                        <ItemTodo
                            key={todo.id}
                            {...todo} />
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ListTodo
