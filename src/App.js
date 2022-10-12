import logo from './logo.svg';
import Header from './Components/Header';
import Aboutme from './Components/Aboutme';
import './App.css';
import Experience from './Components/Experience';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Aboutme />
        <Experience />
        <Footer />
      </header>
    </div>
  );
}

export default App;
