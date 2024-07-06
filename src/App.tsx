import './App.css';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx'
import HomePage from './pages/HomePage.tsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
