import React, { useRef, useEffect } from 'react';
import TodoItem from './TodoItem';
function Todo(props) {
  const { todos, dispatch, isToggle } = props;

  // 獲取 底部div DOM
  const todoItemEndRef = useRef(null);
  const scrollToBottom = () => {
    todoItemEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(scrollToBottom, [todos]);

  return (
    <div className="mb-4 mt-4 h-32 min-h-[50vh] overflow-auto overflow-y-scroll scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-blue-700 scrollbar-thumb-rounded-full">
      <ul className=" pr-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            dispatch={dispatch}
            isToggle={isToggle}
          />
        ))}
      </ul>
      <div ref={todoItemEndRef} />
    </div>
  );
}

export default Todo;
