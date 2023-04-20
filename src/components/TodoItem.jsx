import React, { useEffect } from 'react';
import { ACTIONS } from '../reducer/TodoReducer';

const TodoItem = (props) => {
  const { todo, dispatch, isToggle } = props;

  function handleFinish(todoId) {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todoId } });
  }
  function handleDelete(todoId) {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todoId } });
  }
  function handleEdit(todoId, originalContent) {
    const editContent = prompt('請輸入修改內容', originalContent);
    if (!editContent) return;
    dispatch({
      type: ACTIONS.EDIT_TODO,
      payload: { id: todoId, editContent },
    });
  }
  useEffect(() => {
    dispatch({
      type: ACTIONS.SORT_TODO,
      payload: { isToggle },
    });
  }, [todo]);

  return (
    <li
      key={todo.id}
      className=" mt-2 flex w-full justify-between rounded-md border-s-4 border-solid border-sky-800 bg-white py-4 "
    >
      <div className=" flex items-center justify-center">
        <input
          type="checkbox"
          className=" ml-4 h-4 w-4 "
          value={todo.isFinish}
          onChange={() => {
            handleFinish(todo.id);
          }}
        />
        <span className={` ml-3 text-lg ${todo.isFinish && 'line-through'} `}>
          {todo.text}
        </span>
      </div>
      <div className=" mr-2 flex items-center justify-center">
        <button
          className=" mr-4"
          type="button"
          onClick={() => {
            handleEdit(todo.id, todo.text);
          }}
        >
          Edit
        </button>
        <button
          className=" text-delete"
          type="button"
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
