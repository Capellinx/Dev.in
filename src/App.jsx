import { Contract } from './components/Contract';
import { ItWokrs } from './components/Itworks';
import { OurPlans } from './components/Plans';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { GetIn } from './components/Getin';

export function App() {
  return (
    <>
      <Header/>
      <Intro/>
      <ItWokrs/>
      <GetIn/>
      <OurPlans/>
      <Contract/>
      <Footer/>
    </>
  )
}