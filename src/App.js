import "./App.css";
import Header from "./Component/Header";
import TobBar from "./Component/TobBar";
import Home from "./Page/Home";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <TobBar/>
       <Home/>
    </div>
  );
}

export default App;
