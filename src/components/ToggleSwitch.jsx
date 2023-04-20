import React, { useEffect } from 'react';
import { ACTIONS } from '../reducer/TodoReducer';

function ToggleSwitch(props) {
  const { isToggle, setIsToggle, dispatch } = props;

  // 修改 isToggle 狀態
  function handleClick() {
    setIsToggle((current) => !current);
  }
  useEffect(() => {
    dispatch({
      type: ACTIONS.SORT_TODO,
      payload: { isToggle },
    });
  }, [isToggle]);
  return (
    <div className="mt-4 flex justify-end">
      <h6 className=" mr-2 text-second">Move done things to end?</h6>
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          value={isToggle}
          onClick={() => {
            handleClick();
          }}
        />
        <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
      </label>
    </div>
  );
}

export default ToggleSwitch;
