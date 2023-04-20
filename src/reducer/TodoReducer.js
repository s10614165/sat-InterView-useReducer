// 提前定義 action.type的名稱 更好管理
export const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  EDIT_TODO: 'EDIT_TODO',
  SORT_TODO: 'SORT_TODO',
};

function TodoReducer(todos, action) {
  const { type, payload } = action;
  const { text, id, editContent, isToggle } = payload;

  switch (type) {
    case ACTIONS.ADD_TODO:
      return [...todos, { text, isFinish: false, id: Date.now() }];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isFinish: !todo.isFinish };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== id);
    case ACTIONS.EDIT_TODO:
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: editContent };
        }
        return todo;
      });
    case ACTIONS.SORT_TODO:
      const sortTodo = [...todos];
      if (isToggle) {
        return sortTodo.sort((a, b) => a.isFinish - b.isFinish || a.id - b.id);
      }
      return sortTodo.sort((a, b) => a.id - b.id);

    default:
      return state;
  }
}
export default TodoReducer;
