import './fonts/fonts.css';
import './App.css';
import Header from './components/header/header';
import HomeUI from './components/homepage/home-page';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Thread from "./components/threads/Thread";
import CreateThread from "./components/createthread/CreateThread";
import Categories from "./components/categories/Categories";
import ThreadList from "./components/threadCategories/ThreadList";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/create" component={CreateThread}/>
                    <Route path="/categories" component={Categories}/>
                    <Route path="/threads/:id" render={(props) => <Thread {...props} />}/>
                    <Route path="/threadList/:id" render={(props) => <ThreadList {...props} />}/>
                    <Route exact path="" component={HomeUI}/>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
