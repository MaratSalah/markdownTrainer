/* eslint-disable react/prop-types */

import { useRef, useEffect, memo } from "react";
import Editor from "@toast-ui/editor";

const MarkdownEditor = memo(function MarkdownEditor(props) {
  const markEditorRef = useRef(null);

  useEffect(() => {
    const editor = new Editor({
      el: markEditorRef.current,
      previewStyle: 'vertical',
      hideModeSwitch: true,
    });

    editor.addHook('change', () => {
      const content = editor.getMarkdown();
      const { setText } = props;
      setText(content);
      // код который будет вызван при изменении содержимого редактора
    });
  });

  return (
    <div ref={markEditorRef}></div>
  );
});

export default MarkdownEditor;
