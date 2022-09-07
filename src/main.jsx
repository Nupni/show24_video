import { render } from 'preact';
import { App } from './app';
import './index.css';
import Router from 'preact-router';
import Pure from './pages/pure';
import Lib from './pages/lib';

render(
  <Router>
    <App path="/" />
    <Lib path="/lib" />
    <Pure path="/pure" />
  </Router>,
  document.getElementById('app')
);
