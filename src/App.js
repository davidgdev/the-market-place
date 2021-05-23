import logo from './logo.svg';
import './sass/App.scss';

import SellerProductList from './components/SellerProductList.jsx';
import CategoryProductList from './components/CategoryProductList.jsx';

function App() {
  return (
    <div className="App">
{/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h2>Seller Products</h2>
      <SellerProductList products="" btn_text_1="Edit" btn_text_2="Delete"/>
      
      <br/>
      
      <h2>Category Products</h2>
      <CategoryProductList products="" btn_text_1="View" btn_text_2="Buy"/>
    </div>
  );
}

export default App;
