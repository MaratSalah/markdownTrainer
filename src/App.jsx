/* eslint-disable react/prop-types */

import MarkdownEditor from "./components/MarkdownEditor.jsx"; 
import CheckButton from "./components/CheckButton.jsx";

const App = () => {

  return (
    <>
      <h1 className='bg-red-500 text-blue-500 text-3xl font-black italic text-center'>MarkdownTrainer</h1>
      <MarkdownEditor></MarkdownEditor>
      <div className="container flex justify-center mx-auto">
        <CheckButton></CheckButton>
      </div>
    </>
  );
}

export default App;
