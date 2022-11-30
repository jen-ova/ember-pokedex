import Model, { attr } from '@ember-data/model';

export default class PokemonModel extends Model {
  @attr abilities;
  @attr moves;
  @attr name;
  @attr species;
  @attr sprites;
  @attr types;
}
