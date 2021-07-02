import './App.css';
import { TopMenu } from './components/TopMenu/TopMenu';
import { Switch, Route } from 'react-router-dom';
import {ChooseHeroes} from './pages/ChooseHeroes'
import {FavoriteHeroes} from './pages/FavoriteHeroes'

document.body.style.backgroundColor = "black";
function App() {
  return (
    <div className="App">

        <TopMenu/>
        <main>
        <Switch>
          <Route exact path="/">
            <ChooseHeroes/>
          </Route>
          <Route path="/favorite" component={FavoriteHeroes}/>
        </Switch>
        </main>

    </div>
  );
}

export default App;
