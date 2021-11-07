import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About" />
      <TextForm heading="Enter The Text" />
    </>
  );
}

export default App;
