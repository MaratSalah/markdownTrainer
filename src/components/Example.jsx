import { useSelector } from "react-redux";
import showdown from "showdown";

const Example = () => {
  const currentLevel = useSelector((state) => state.levels.value.currentLevel);
  const text = useSelector((state) => state.levels.value.entities[currentLevel].exercise);

  // use converter for convert md to html automatically

  const converter = new showdown.Converter();

  const html = converter.makeHtml(text);
  const innerHtml = { __html: html };

  return (
    <div className="w-1/2 min-h-full border-2 border-inherit">
      <span dangerouslySetInnerHTML={innerHtml}></span>
    </div>
  );
};

export default Example;
