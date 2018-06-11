import React from 'react';
import axios from 'axios';
import PokeList from '../PokeList/PokeList';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemon: []
    };
  }
  componentDidMount() {
    axios
      .get('/pokemon')
      .then(res => {
        this.setState({ pokemon: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>My Pokemon</h1>
        <PokeList pokemon = {this.state.pokemon}/>
    
      </div>
    );
  }
}
