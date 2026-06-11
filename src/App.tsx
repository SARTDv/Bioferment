import Hero from './components/Hero';
import Objectives from './components/Objectives';
import Procedure from './components/Procedure';
import Concepts from './components/Concepts';
import Results from './components/Results';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Hero />
      <Objectives />
      <Procedure />
      <Concepts />
      <Results />
      <Footer />
    </div>
  );
}

export default App;
