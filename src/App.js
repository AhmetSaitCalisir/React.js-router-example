import { BrowserRouter as Router, Route } from "react-router-dom";

import Shop from "./pages/Shop";
import About from "./pages/About";
import Nav from "./components/Nav";
import ItemDetail from "./pages/ItemDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={ItemDetail} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default App;
