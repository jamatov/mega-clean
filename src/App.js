import './App.scss';
import './Responsive.scss'
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Primushestva from './components/Primushestva';
import Services from './components/Services';
import WorkLevel from './components/WorkLevel';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Primushestva/>
      <About/>
      <Services/>
      <WorkLevel/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
