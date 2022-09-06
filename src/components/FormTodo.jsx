import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/todosSlice';

const FormTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAdd = (e) => {
        e.preventDefault();
        if (text.trim().length) {
            dispatch(add({ text }));
            setText('');
        }
    }
    return (
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
    )
}

export default FormTodo
