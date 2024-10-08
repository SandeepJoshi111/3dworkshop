import { Icon } from "@iconify/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Aboutpage from "./pages/Aboutpage";
import Clientpage from "./pages/Clientpage";
import Contactpage from "./pages/Contactpage";
import Homepage from "./pages/Homepage";
import Packagepage from "./pages/Packagepage";
import Servicepage from "./pages/Servicepage";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import CustomCursor from "./components/CustomCursor";

function App() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
    });
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <Homepage />
      <Aboutpage />
      <Servicepage />
      <Packagepage />
      <Clientpage />
      <Contactpage />
      <Footer />
      <a href="#home">
        <Icon
          icon="mdi:arrow-up"
          className="fixed size-8 bottom-5 right-5 lg:bottom-10 lg:right-10"
        />
      </a>
    </>
  );
}

export default App;
