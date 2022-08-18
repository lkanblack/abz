import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./views/Hero/Hero";
import People from "./views/People/People";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <People />
    </div>
  );
}

export default App;
