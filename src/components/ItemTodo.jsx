import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { toggle, remove, save } from '../store/todosSlice';

const ItemTodo = ({ id, body, completed }) => {
  const [edit, setEdit] = useState(null);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const editMode = (id, body) => {
    setEdit(id);
    setText(body);
  };
  const saveChange = (id) => {
    dispatch(save({ id, text }));
    setEdit(null);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <input
        className="form-check-input me-2"
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggle({ id }))}
      />
      {edit === id ? (
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button type="button" className="btn btn-success" onClick={() => saveChange(id)}>
            save
          </button>
        </div>
      ) : (
        <>
          <span className="me-auto">{body}</span>
          <button type="button" className="btn btn-primary" onClick={() => editMode(id, body)}>
            edit
          </button>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => dispatch(remove({ id }))}></button>
        </>
      )}
    </li>
  );
};

export default ItemTodo;
