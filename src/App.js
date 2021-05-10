import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LandingPage}/>
      </Switch>
    </Router>
  );
}

export default App;
