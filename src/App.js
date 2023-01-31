import './App.css';
import Header from './Components/Header/Header.js';
import Auth from './Components/Auth/Auth.js';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useUser } from './Context/UserProvider';

function App() {
  const { user } = useUser();

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route exact path="/">
          <>
            {user && <Redirect to="/tasks" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
