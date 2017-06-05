import React from 'react';
import FilmList from './FilmList';

class FilmContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
      {id: 1, title: 'Sausage Party'},
      {id: 2, title: 'Cafe Society'},
      {id: 3, title: 'Morgan'},
      {id: 4, title: 'The 9th Life of Louis Drax'},
      {id: 5, title: 'Naam Hai Akira'},
      {id: 6, title: 'Equity'},
      {id: 7, title: 'Things to Come'}
      ]
    }
  }

  render(){
    return(
      <div className="film-container">
      <h2>{this.props.title}</h2>
      <FilmList data={ this.state.data }/>
      <button>Get showtimes</button>
      </div>
      )
  }
}

export default FilmContainer;