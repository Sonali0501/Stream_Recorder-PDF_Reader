import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/NavBar';
import Recorder from './components/Recorder';
import './App.scss';
import Videos from './components/Videos';
import PDFReader from './components/PDFReader';
import PPTReader from './components/PPTReader';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Recorder} />
        <Route path="/videos" component={Videos} />
        <Route path="/pdf" component={PDFReader} />
        <Route path="/ppt" component={PPTReader} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;