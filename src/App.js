import './fonts/fonts.css';
import Header from './components/header/header';
import HomeUI from './components/homepage/home-page';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ForumsHome from './components/forums/forums-homepage';
import Register from "./components/register/Register";

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/forums" component={ForumsHome} />
          <Route path="/register" component={Register} />
          <Route exact path="" component={HomeUI} />
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
