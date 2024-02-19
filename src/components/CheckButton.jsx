import { useDispatch, useSelector } from 'react-redux';
import { nextLevel } from '../slices/levelsSlice';
import { changeHelperVision } from '../slices/helperSlice';

const CheckButton = () => {
  const dispatch = useDispatch();
  const usersText = useSelector((state) => state.usersText.value);
  const levelsState = useSelector((state) => state.levels.value);

  const { ids, entities } = levelsState;

  const changeLevel = () => {
    for (let i = 0; i < ids.length; i += 1) {
      const id = ids[i];
      if (
        entities[id].ended === 'false' &&
        entities[id].exercise.trim() === usersText.trim()
      ) {
        dispatch(changeHelperVision(false));
        window.setTimeout(() => dispatch(nextLevel(id)), 500);
        return;
      }
    }
  };

  return (
    <button
      onClick={changeLevel}
      className="transition rounded-md m-3 py-2 px-6 ease-in-out
      delay-150 bg-gray-900 text-white hover:scale-110 hover:bg-gray-600 duration-300">
      <span>Send</span>
    </button>
  );
};

export default CheckButton;
