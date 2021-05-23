import logo from './logo.svg';
import './sass/App.scss';

import FeaturedProductCard from './components/FeaturedProductCard.jsx';

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
      <FeaturedProductCard title="blue notebook" description="Save all your notes in this amazing notebook. 
                It has 100 blank pages to be filled with your stories." price="10.00" quantity="5"/>
    </div>
  );
}

export default App;
