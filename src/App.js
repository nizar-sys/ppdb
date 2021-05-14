import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Daftar from "./Pages/Daftar";
import SuccessDaftar from "./Pages/DaftarSuccess";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/daftar" component={Daftar} />
        <Route path="/success" component={SuccessDaftar} />
      </Switch>
    </Router>
  );
}

export default App;
