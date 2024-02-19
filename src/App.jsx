import MarkdownEditor from './components/MarkdownEditor.jsx';
import CheckButton from './components/CheckButton.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import Example from './components/Example.jsx';
import Helper from './components/Helper.jsx';
import HelpButton from './components/HelpButton.jsx';

const App = () => {
  return (
    <>
      <header className="bg-white text-3xl font-black italic text-center mb-2">
        MarkdownTrainer
      </header>
      <div className="grid grid-cols-2">
        <MarkdownEditor></MarkdownEditor>
        <Example></Example>
      </div>
      <ProgressBar></ProgressBar>
      <div className="container flex justify-center items-center mx-auto">
        <Helper></Helper>
      </div>
      <div className="container flex justify-center items-center mx-auto">
        <CheckButton></CheckButton>
        <HelpButton></HelpButton>
      </div>
    </>
  );
};

export default App;
