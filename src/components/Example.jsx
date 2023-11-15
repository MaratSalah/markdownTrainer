import { useSelector } from "react-redux";

const Example = () => {
  const currentLevel = useSelector((state) => state.levels.value.currentLevel);
  const text = useSelector((state) => state.levels.value.entities[currentLevel].exercise);

  return (
    <div className="w-1/2 min-h-full border-2 border-inherit">
      <span>{text}</span>
    </div>
  );
};

export default Example;
