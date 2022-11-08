import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="w-full bg-fixed" style={{backgroundImage: 'url("background.jpg")'}}>
        {/* <Home/>      */}
        <About />
    </div>
  );
}

export default App;
