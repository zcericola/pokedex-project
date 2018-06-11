import React from 'react';

const PokeList = (props) => {
    let pokeNames;
    props.pokemon.results ? pokeNames =  props.pokemon.results.map((curr, i) => <div key = {i}>{curr.name}</div>): null;
    return(<div>{pokeNames}</div>);

}

export default PokeList;