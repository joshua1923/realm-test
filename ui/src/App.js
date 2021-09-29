import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';
import Nav from './components/Nav';

const App = () => {

    return (
        <>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/about" component={About} />
        </Switch>
        <Nav />
        </>
    )
}

export default App;
