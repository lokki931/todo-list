import { useState } from 'react';

const FormTodo = ({ todos, setTodos }) => {
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
