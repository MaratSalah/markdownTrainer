import { useSelector } from "react-redux";
import Editor from "@toast-ui/editor";
import { useRef, useEffect } from "react";

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
    <>
      <div ref={markExampleRef} className="mt-9 w-1/2 min-h-full border-2 border-inherit">
      </div>
    </>
  );
}

export default Example;
