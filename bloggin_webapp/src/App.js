import Topbar from "./Components/Topbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Addpost from "./Pages/Addpost/Addpost";
import Addaccount from "./Pages/Addaccount/Addaccount";

function App() {
  return (
    <div className="container">
      <Router>
        <Topbar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="container">
          <div className="others">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/Login">
                <Login />
              </Route>
              <Route path="/Addpost">
                <Addpost />
              </Route>
              <Route path="/Addaccount">
                <Addaccount />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
