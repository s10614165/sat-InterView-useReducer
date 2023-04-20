import { useReducer, useRef, useState } from 'react';
import Progressbar from './components/Progressbar';
import Todo from './components/Todo';
import ToggleSwitch from './components/ToggleSwitch';
import TodoInput from './components/TodoInput';
import TodoReducer, { ACTIONS } from './reducer/TodoReducer';
function App() {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  const [isToggle, setIsToggle] = useState(false);
  const newTodo = useRef(null);
  return (
    <div className="flex min-h-screen justify-center bg-gradient-to-b from-cyan-100  to-violet-100">
      <div className="w-11/12">
        <h1 className=" mt-5 text-4xl font-bold text-second ">Todo List</h1>
        <h2 className="ml-1 text-second">Add things to do</h2>
        <hr className="h-[2px] border-none  bg-blue-600 " />
        <Progressbar todo={todos} />
        <Todo todos={todos} isToggle={isToggle} dispatch={dispatch} />
        <hr className="h-[2px] border-none  bg-blue-600 " />
        <ToggleSwitch
          isToggle={isToggle}
          setIsToggle={setIsToggle}
          dispatch={dispatch}
        />
        <TodoInput newTodo={newTodo} todos={todos} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
