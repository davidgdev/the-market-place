import './sass/App.scss';

import HorizontalCard from './components/HorizontalCard.jsx';
import ProductDescription from './components/ProductDescription';

function App() {
  return (
    <div className="App">
      <ProductDescription />
      <br/>
      <HorizontalCard title="blue notebook" description="Save all your notes in this amazing notebook. 
                It has 100 blank pages to be filled with your stories." price="10.00" quantity="5"/>
    </div>
  );
}

export default App;
