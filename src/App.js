// import "./App.css";

import Hobbies from "./components/Hobbies";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="w-full max-w-full mx-auto md:max-w-4xl">
      <Intro />
      <div className="md:max-w-4xl mx-auto">
        <Skills />
        <Projects />
        <Hobbies />
      </div>
    </div>
  );
}

export default App;
