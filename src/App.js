import './fonts/fonts.css';
import Header from './components/header/header';
import HomeUI from './components/homepage/home-page';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="" component={HomeUI} />
          <Route path="/forums" component={Forums} />
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
