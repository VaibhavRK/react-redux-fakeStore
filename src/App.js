import logo from './logo.svg';
import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
         <Switch>
           <Route exact path="/" component={ProductListing} />
           <Route path="/product/:productID" component={ProductDetail} />
         </Switch>
      </Router>
    </div>
  );
}

export default App;
