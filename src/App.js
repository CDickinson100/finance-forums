import './fonts/fonts.css';
import Header from './components/header/header';
import HomeUI from './components/homepage/home-page';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ForumsHome from './components/forums/forums-homepage';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="" component={HomeUI} />
          <Route path="/forums" component={ForumsHome} />
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
