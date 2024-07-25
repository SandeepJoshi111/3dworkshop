import Navbar from "./components/Navbar";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
import Homepage from "./pages/Homepage";
import Packagepage from "./pages/Packagepage";
import Servicepage from "./pages/Servicepage";

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Aboutpage />
      <Servicepage />
      <Packagepage />
      <Contactpage />
    </>
  );
}

export default App;
