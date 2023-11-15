/* eslint-disable react/prop-types */

import { useRef, useEffect, memo } from "react";
import Editor from "@toast-ui/editor";
import { useDispatch } from "react-redux";
import { change } from "../slices/usersTextSlice";

const MarkdownEditor = memo(function MarkdownEditor() {
  const markEditorRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const editor = new Editor({
      el: markEditorRef.current,
      previewStyle: 'tab',
      hideModeSwitch: true,
      initialValue: ' ',
    });

    editor.addHook('change', () => {
      const content = editor.getMarkdown();
      dispatch(change(content));
      // код который будет вызван при изменении содержимого редактора
    });
  });

  return (
    <div className="w-6/12" ref={markEditorRef}></div>
  );
});

export default MarkdownEditor;
