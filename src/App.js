import './App.css';
import { TopMenu } from './components/TopMenu/TopMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>  
        <TopMenu/>
        <main>
        {/* <Switch> рендерит первый <Route>, совпавший с URL */}
        <Switch>
          <Route path="/">
            345
          </Route>
          <Route path="/favorite">
            123
          </Route>
        </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
