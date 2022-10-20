import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Banner from './components/Banner/Banner';
import Products from './components/Product/Products';

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
        <Products />
      </div>



    </div>
  );
}

export default Home;
