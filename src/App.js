import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/NavBar';
import Recorder from './components/Recorder';
import './App.scss';
import Videos from './components/Videos';
import PDFReader from './components/PDFReader';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Recorder} />
        <Route path="/videos" component={Videos} />
        <Route path="/pdf" component={PDFReader} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;