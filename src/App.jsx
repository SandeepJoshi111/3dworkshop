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

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <Navbar />
      <Homepage />
      <Aboutpage />
      <Servicepage />
      <Packagepage />
      <Clientpage />
      <Contactpage />
      <Footer />
      <a
        href="https://wa.me/9779818119950?text=Hi! Want to know more about you packages!"
        target="_blank"
      >
        <Icon
          icon="logos:whatsapp-icon"
          className="fixed size-8 bottom-5 right-5 lg:bottom-10 lg:right-10"
        />
      </a>
    </>
  );
}

export default App;
