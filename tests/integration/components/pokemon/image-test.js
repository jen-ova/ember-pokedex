import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-pokedex/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pokemon/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Pokemon::Image />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Pokemon::Image>
        template block text
      </Pokemon::Image>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
