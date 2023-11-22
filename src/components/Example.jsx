import { useSelector } from "react-redux";
import Editor from "@toast-ui/editor";
import { useRef, useEffect } from "react";
/* import showdown from "showdown";

const Example = () => {
  const currentLevel = useSelector((state) => state.levels.value.currentLevel);
  const markdown = useSelector((state) => state.levels.value.entities[currentLevel].exercise);

  // use converter for convert md to html automatically

  const converter = new showdown.Converter();
  converter.setFlavor('github');

  const html = converter.makeHtml(markdown);
  const innerHtml = { __html: html };

  return (
    <div className="w-1/2 min-h-full border-2 border-inherit">
      <span dangerouslySetInnerHTML={innerHtml}></span>
    </div>
  );
}; */

const Example = () => {
  const currentLevel = useSelector((state) => state.levels.value.currentLevel);
  const markdown = useSelector((state) => state.levels.value.entities[currentLevel].exercise);

  const markExampleRef = useRef(null);

  // use converter for convert md to html automatically

  useEffect(() => {
    const viewer = new Editor.factory({
      el: markExampleRef.current,
      initialValue: markdown,
      height: '500px',
      viewer: true,
    });
  })

  return (
    <div ref={markExampleRef} className="w-1/2 min-h-full border-2 border-inherit">
    </div>
  );
}

export default Example;
