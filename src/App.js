import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
function App() {
  return (
    <div className="w-full h-screen bg-cover bg-[url('/public/background.jpg')] flex items-center">
      <Home />
    </div>
  );
}

export default App;
