
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
        </Switch> 
        <Footer />
    </Router>
    
  );
}

export default App;
