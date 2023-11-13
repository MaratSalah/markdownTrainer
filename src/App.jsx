/* eslint-disable react/prop-types */

import MarkdownEditor from "./components/MarkdownEditor.jsx";
import CheckButton from "./components/CheckButton.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import { useSelector } from "react-redux";

const App = () => {
  const text = useSelector((state) => state.usersText.value);
  const testText = '*Burrito*';
  const trimmedText = `${text}`.trim();

  return (
    <>
      <header className='bg-red-500 text-blue-500 text-3xl font-black italic text-center'>MarkdownTrainer</header>
      <MarkdownEditor></MarkdownEditor>
      <ProgressBar></ProgressBar>
      <div className="container flex justify-center mx-auto">
        <CheckButton></CheckButton>
      </div>
      <h1>{trimmedText === testText ? 'Win' : 'Lose'}</h1>
    </>
  );
}

export default App;
