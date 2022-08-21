import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./views/Hero/Hero";
import People from "./views/People/People";
import SignUp from "./views/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <People />
      <SignUp />
    </div>
  );
}

export default App;
