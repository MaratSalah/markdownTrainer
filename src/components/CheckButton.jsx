import { useDispatch, useSelector } from "react-redux";
import { nextLevel } from "../slices/levelsSlice";

const CheckButton = () => {
  const dispatch = useDispatch();
  const usersText = useSelector((state) => state.usersText.value);
  const levelsState = useSelector((state) => state.levels.value);

  const { ids, entities } = levelsState;

  const changeLevel = () => {
    for (let i = 0; i < ids.length; i += 1) {
      const id = ids[i];
      if (entities[id].ended === 'false' && entities[id].exercise === usersText.trim()) {
        dispatch(nextLevel(id));
        return;
      }
    }
  };

  return (
    <button onClick={changeLevel} className="transition rounded-md m-3 ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
      <span className="m-6">Send</span>
    </button>
  );
};

export default CheckButton;
