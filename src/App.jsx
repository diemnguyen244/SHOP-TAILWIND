import Hero from "./Components/Hero";
import Anouncement from "./Components/Anouncement";
import Collection from "./Components/Collection";
import Review from "./Components/Review";
import About from "./Components/About";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div>
      <Anouncement />
      <Hero />
      <Collection />
      <Review />
      <About />
      <Footer />
    </div>
  );
};

export default App;
