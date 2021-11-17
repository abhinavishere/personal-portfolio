// import "./App.css";

import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="w-full max-w-full mx-auto">
      <Intro />
      <div>
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
