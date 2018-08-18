import React from 'react';
import ReactDOM from 'react-dom';

// CSS Global
import './assets/css/reset.css'
import './assets/css/container.css'
import './assets/css/btn.css'
import './assets/css/icon.css'
import './assets/css/iconHeart.css'
import './assets/css/notificacao.css'

import './assets/css/novoTweet.css'
// import './index.css';


import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

const perfil = (props) => {
    console.log(props)
    return (
        <div className="container text-center">
            
            <h1>Olá, {props.match.params.login} </h1>
            
        <Link to="/">Home</Link>
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
       <Switch>
           <Route path="/" exact component={App} />
           <Route path="/user/:login" component={perfil} />
       </Switch>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
