import "../Style/app.css";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Footer from "../Components/Footer/Footer";
import Solutions from "../pages/Solution/Solution";
import About from "../pages/About/About";
import LifeatKensho from "../pages/LifeatKensho/LifeatKensho";
import Signin from "../pages/Signin/Signin";
import ContactUs from "../pages/ContactUs/ContactUs";
import FreeTrial from "../pages/FreeTrial/FreeTrial";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="App-margin">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/solutions">
              <Solutions />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/lifeatkensho">
              <LifeatKensho />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/freetrial">
              <FreeTrial />
            </Route>
            <Route path="/contactus">
              <ContactUs />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
