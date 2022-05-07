import './App.css';
import Bestresorts from './components/BestResorts/Bestresorts';
import Footer from './components/Footer/Footer';
import Icecold from './components/Icecold/Icecold';
import Locations from './components/Locations/Locations';
import Prefooter from './components/Prefooter/Prefooter';
import Sponsors from './components/Sponsors/Sponsors';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App ">
      <Home />
      <Sponsors />
      <Icecold />
      <Locations />
      <Bestresorts />
      <Prefooter />
      <Footer />
    </div>
  );
}

export default App; 