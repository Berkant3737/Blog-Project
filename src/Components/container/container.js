import { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import About from "../../Components/About/About";
import Skills from "../../Components/Skills/Skills";
import Project from "../../Components/Project/Project";
import ContactMe from "../../Components/ContactMe/ContactMe";
import Footer from "../../Components/Footer/Footer";
function Container() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app${theme === "dark" ? theme : ""}`}>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Project />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default Container;
