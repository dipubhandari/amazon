import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Banner from './components/Banner/Banner';
import Products from './components/Product/Products';
import Footer from './components/Footer/Footer';

function Home() {
  return (
    <div className="App">

      <div className='header_content'>
        <Header />
      </div>

      <div>
        <Banner />

      </div>
      <div className='all'>
        <Products />

      </div>
       
       <div className='footer'>
        <Footer/>
       </div>

    </div>
  );
}

export default Home;
