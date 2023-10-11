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
import Scribe from "../pages/Scribe/Scribe";
import Nerd from "../pages/Nerd/Nerd";
import Extract from "../pages/Extract/Extract";
import Classify from "../pages/Classify/Classify";
import Impact from "../pages/Impact/Impact";
import Dei from "../pages/Dei/Dei";
import Benefits from "../pages/Benefits/Benefits";
import Not404Page from "../pages/Not404Page/Not404Page";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAymm-POnT0C0kbEfMT5GCiDwTwnHxUV5Y",
  authDomain: "kensho-77268.firebaseapp.com",
  projectId: "kensho-77268",
  storageBucket: "kensho-77268.appspot.com",
  messagingSenderId: "358960695891",
  appId: "1:358960695891:web:6184ad8ed3a491c5c514a6",
  measurementId: "G-7KVG50XWBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
            <Route path="/scribe">
              <Scribe/>
            </Route>
            <Route path="/classify">
              <Classify />
            </Route>
            <Route path="/extract">
              <Extract />
            </Route>
            <Route path="/nerd">
              <Nerd />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/lifeatkensho">
              <LifeatKensho />
            </Route>
            <Route path="/dei">
              <Dei/>
            </Route>
            <Route path="/benefits">
              <Benefits/>
            </Route>
            <Route path="/impact">
              <Impact/>
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
            <Route path="*">
              <Not404Page />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
