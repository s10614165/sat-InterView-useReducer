import React from 'react';
import { ACTIONS } from '../reducer/TodoReducer';

function TodoInput(props) {
  const { newTodo, dispatch } = props;

  // 新增Todo
  function handleAddTodo(todo) {
    if (todo.current?.value.trim() === '') return;
    // 將多餘空白刪除
    const trimTodoString = todo.current?.value.trim();
    // 若 todo 為空陣列，則新增一筆，反之則解構 preventValue ，再進行新增 todo
    dispatch({ type: ACTIONS.ADD_TODO, payload: { text: trimTodoString } });

    todo.current.value = '';
  }
  function handleKeyPress(todo, event) {
    if (event.key === 'Enter') {
      handleAddTodo(todo);
    }
  }
  return (
    <div className="mt-8">
      <h6 className="text-second">Add to list</h6>
      <div className="mt-2 flex flex-row justify-between">
        <input
          className=" w-[95%] pl-2"
          ref={newTodo}
          onKeyDown={(event) => {
            handleKeyPress(newTodo, event);
          }}
          type="text"
        />
        <div className="ml-1 flex w-6 items-center justify-center bg-blue-600">
          <button
            className=" text-cyan-50  "
            type="button"
            onClick={() => {
              handleAddTodo(newTodo);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
