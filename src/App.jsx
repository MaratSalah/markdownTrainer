import MarkdownEditor from './components/MarkdownEditor.jsx';
import CheckButton from './components/CheckButton.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import Example from './components/Example.jsx';

const App = () => {
  return (
    <>
      <header className="bg-white text-3xl font-black italic text-center mb-2">
        MarkdownTrainer
      </header>
      <div className="grid grid-cols-2 grid-rows-12">
        <MarkdownEditor></MarkdownEditor>
        <Example></Example>
      </div>
      <ProgressBar></ProgressBar>
      <div className="container flex justify-center mx-auto">
        <CheckButton></CheckButton>
      </div>
    </>
  );
};

export default App;
