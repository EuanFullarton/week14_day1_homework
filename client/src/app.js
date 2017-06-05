import React from 'react';
import ReactDOM from 'react-dom';
import FilmContainer from './components/FilmContainer';

window.onload = function(){
  ReactDOM.render(
    <FilmContainer title="UK Opening This Week"/>,
    document.getElementById('app')
  );
}
