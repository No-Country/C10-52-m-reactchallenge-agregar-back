import "./App.css";
import { Context } from "./components/Context/Context";
import GeneralOdoltology from "./components/GeneralOdoltology/GeneralOdoltology";
import OurServices from "./components/OurServices/OurServices";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

function App() {
  return (
    <Context>
      <OurServices />
      <WhyChooseUs />
      <GeneralOdoltology />
    </Context>
  );
}

export default App;
