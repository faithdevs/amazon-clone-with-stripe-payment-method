import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe
("pk_test_51IQNRLEUQXzN8bnJtsv2y5N9UdxkVZ45gbbTE8UsDLQfgvr5NmaDoFimIDEktsFNohnTGdU9junFdQeXGHol9SCQ00kZGuSs3Y")
function App() {
  return (
      // BEM 
      <Router>
        <div className="app">
          
          <Switch>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
              
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
      
    </div>
    </Router>
  );
}

export default App;
