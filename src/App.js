import './App.scss';
import Consultation from './components/Consultation';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import NumberInfo from './components/NumberInfo';
import Partners from './components/Partners';
import Primushestva from './components/Primushestva';
import Services from './components/Services';
import WorkLevel from './components/WorkLevel';

function App() {
  return (
    <div className="App">
      <Header/>
      <Primushestva/>
      <Services/>
      <Consultation/>
      <WorkLevel/>
      <NumberInfo/>
      <FAQ/>
      <Partners/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
