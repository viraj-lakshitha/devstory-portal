import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./layout/Profile/Login/Login";
import SignUp from "./layout/Profile/SignUp/SignUp";
import Home from "./layout/Home/Home";
import PageNotFound from "./layout/404/PageNotFound";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/login" component={Login}></Route>
            <Route component={PageNotFound}></Route>
          </Switch>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};

export default App;
