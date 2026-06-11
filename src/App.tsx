import Hero from './components/Hero';
import Objectives from './components/Objectives';
import Procedure from './components/Procedure';
import Concepts from './components/Concepts';
import Results from './components/Results';
import Footer from './components/Footer';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Concepts />
      <Objectives />
      <Procedure />      
      <Results />
      <Footer />
    </div>
  );
}

export default App;
