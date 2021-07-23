import React from 'react';
import './scss/app.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./components/AuthForm/AuthForm";
import Register from "./components/Register/Register";

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Switch>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
