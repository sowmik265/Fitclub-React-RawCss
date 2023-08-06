import './App.css';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';

function App() {
  return (
    <div className="App">
         <Hero></Hero>
         <Programs></Programs>
         <Reasons></Reasons>
         <Plans></Plans>
    </div>
  );
}

export default App;
