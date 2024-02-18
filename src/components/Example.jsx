import { useSelector } from 'react-redux';
import Editor from '@toast-ui/editor';
import { useRef, useEffect } from 'react';

const Example = () => {
  const currentLevel = useSelector((state) => state.levels.value.currentLevel);
  const markdown = useSelector(
    (state) => state.levels.value.entities[currentLevel].exercise
  );

  const markExampleRef = useRef(null);

  // use converter for convert md to html automatically

  useEffect(() => {
    new Editor.factory({
      el: markExampleRef.current,
      initialValue: markdown,
      height: '500px',
      viewer: true,
    });
  });

  return (
    <div
      ref={markExampleRef}
      className="col-span-1 border-2 border-inherit"></div>
  );
};

export default Example;
