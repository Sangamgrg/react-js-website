import About from "./components/About";
import Blog from "./components/Blog";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Services from "./components/Services";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Services />
      <About />
      <Products />
      <Blog />
    </>
  );
}

export default App;
