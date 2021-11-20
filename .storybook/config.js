import { configure } from '@storybook/vue';

function loadStories() {
  const req = require.context('../components', true, /\.stories\.ts$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);