import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-pokedex/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pokemon/details', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Pokemon::Details />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Pokemon::Details>
        template block text
      </Pokemon::Details>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
