import MarkdownEditor from "./components/MarkdownEditor.jsx";
import CheckButton from "./components/CheckButton.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import Example from "./components/Example.jsx";

const App = () => {

  return (
    <>
      <header className='bg-red-500 text-blue-500 text-3xl font-black italic text-center'>MarkdownTrainer</header>
      <div className="flex flex-row">
        <MarkdownEditor className="basis-1/2"></MarkdownEditor>
        <Example className="basis-1/2"></Example>
      </div>
      <ProgressBar></ProgressBar>
      <div className="container flex justify-center mx-auto">
        <CheckButton></CheckButton>
      </div>
    </>
  );
}

export default App;
