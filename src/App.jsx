import './App.css'
import FormLogin from './components/Forms/FormLogin'
import FormRegister from './components/Forms/FormRegister'
import GeneralOdoltology from './components/GeneralOdoltology/GeneralOdoltology'
import OurServices from './components/OurServices/OurServices'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'

function App() {

  return (
    <>
      <OurServices />
      <WhyChooseUs />
      <GeneralOdoltology />
      {/* <FormRegister /> */}
      <FormLogin />
    </>
  )
}

export default App
