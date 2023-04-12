import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import GeneralOdoltology from './components/GeneralOdoltology/GeneralOdoltology'
import OurServices from './components/OurServices/OurServices'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <OurServices />
      <WhyChooseUs />
      <GeneralOdoltology />
      <Footer />
    </>
  )
}

export default App;
