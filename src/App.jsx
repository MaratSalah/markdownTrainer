/* eslint-disable react/prop-types */

import { useState } from "react";
import MarkdownEditor from "./components/MarkdownEditor.jsx"; 
import CheckButton from "./components/CheckButton.jsx";
import ProgressBar from "./components/ProgressBar.jsx";

const App = () => {
  const [text, setText] = useState(null);
  const [progress, setProgress] = useState([
    'true',
    'true',
    'true',
    'true',
    'true',
  ]);
  // const [textFixtures, setTextFixtures] = useState([
    // '*Burrito*',
  // ]);
  const testText = '*Burrito*';
  const trimmedText = `${text}`.trim();

  return (
    <>
      <h1 className='bg-red-500 text-blue-500 text-3xl font-black italic text-center'>MarkdownTrainer</h1>
      <MarkdownEditor setText={setText}></MarkdownEditor>
      <ProgressBar progress={progress} setProgress={setProgress}></ProgressBar>
      <div className="container flex justify-center mx-auto">
        <CheckButton></CheckButton>
      </div>
      <h1>{trimmedText === testText ? 'Win' : 'Lose'}</h1>
    </>
  );
}

export default App;
