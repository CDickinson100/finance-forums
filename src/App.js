import './fonts/fonts.css';
import './App.css';
import Header from './components/header/header';
import HomeUI from './components/homepage/home-page';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ForumsHome from './components/forums/forums-homepage';
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Thread from "./components/threads/Thread";
import CreateThread from "./components/createthread/CreateThread";
import Categories from "./components/categories/Categories";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/forums" component={ForumsHome}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/create" component={CreateThread}/>
                    <Route path="/categories" component={Categories}/>
                    <Route path="/threads/:id" render={(props) => <Thread {...props} />}/>
                    <Route exact path="" component={HomeUI}/>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
