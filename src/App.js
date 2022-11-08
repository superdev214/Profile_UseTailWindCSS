import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <div className="w-full bg-fixed" style={{backgroundImage: 'url("background.jpg")'}}>
        {/* <Home/>      */}
        
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />     
        </Routes>
      </Router>
    </div>
  );
}

export default App;
