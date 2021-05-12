import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Daftar from "./Pages/Daftar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/daftar" component={Daftar} />
      </Switch>
    </Router>
  );
}

export default App;
