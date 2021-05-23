import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './sass/App.scss';


function App() {
  return (
    <BrowserRouter>
      <div>
      <header className="header">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/" className="">
                <h1>
                  <span className="nav__title-black">Market</span>
                  <span className="nav__title-white">Place</span>
                </h1>
                <img className="nav__logo" src="" alt="Logo cart shopping"></img>
              </Link>
            </li>
            <li>
              <Link to="/" className="nav__item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/categories" className="nav__item">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav__item">
                Login/Sign up
              </Link>
            </li>
          </ul>
          
        </nav>
      </header>

      <div>
        <Switch>
          <Route>
            <Route exact path="/login" component={Login}></Route>
          </Route>
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
