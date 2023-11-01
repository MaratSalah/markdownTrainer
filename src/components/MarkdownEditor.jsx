/* eslint-disable react/prop-types */

import { useState, useRef, useEffect, memo } from "react";
import Editor from "@toast-ui/editor";

const MarkdownEditor = memo(function MarkdownEditor() {
  const [text, setText] = useState(null);
  const markEditorRef = useRef(null);

  useEffect(() => {
    const editor = new Editor({
      el: markEditorRef.current,
      previewStyle: 'vertical',
      hideModeSwitch: true,
    });

    editor.addHook('change', () => {
      const content = editor.getMarkdown();
      setText(content);
      // код который будет вызван при изменении содержимого редактора
    });
  });

  return (
    <div ref={markEditorRef}></div>
  );
});

export default MarkdownEditor;
