import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/a-propos" exact component={About}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
