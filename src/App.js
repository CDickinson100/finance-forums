import './fonts/fonts.css';
import './App.css';
import Header from './components/header/header';
import HomeUI from './components/homepage/home-page';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ForumsHome from './components/forums/forums-homepage';
import Register from "./components/register/Register";
import Login from "./components/login/Login";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/forums" component={ForumsHome}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <Route exact path="" component={HomeUI}/>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
