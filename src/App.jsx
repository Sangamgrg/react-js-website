import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <h1 className='text-3xl font-bold text-brandPrimary'>Hello world!</h1>
      <NavBar />
      <Home />
      <Services />
    </>
  );
}

export default App;
