import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let detailedPokemon = [];

    const res = await fetch('https://pokeapi.co/api/v2/type/8');
    const pokes = await res.json();
    const data = pokes.pokemon;

    let pokeList = data.map((pokemon) => ({
      name: pokemon.pokemon.name,
      url: pokemon.pokemon.url,
    }));

    for (const pokemon of pokeList) {
      const res = await fetch(`${pokemon.url}`);
      const pokeData = await res.json();
      detailedPokemon.push(pokeData);
    }

    const uniquePokes = Object.values(
      detailedPokemon.reduce(
        (acc, pokemon) =>
          Object.assign(acc, { [pokemon.species.name]: pokemon }),
        {}
      )
    ).filter(
      (pokemon) =>
        pokemon.sprites.other['official-artwork'].front_default !== null
    );

    return uniquePokes;
  }
}
