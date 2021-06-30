import './App.css';
import { TopMenu } from './components/TopMenu/TopMenu';
import {
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">

        <TopMenu/>
        <main>
        {/* <Switch> рендерит первый <Route>, совпавший с URL */}
        <Switch>
          <Route exact path="/">
            345
          </Route>
          <Route path="/favorite">
            123
          </Route>
        </Switch>
        </main>

    </div>
  );
}

export default App;
