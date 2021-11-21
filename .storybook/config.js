import { configure } from '@storybook/vue';

const req = require.context('../components', true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach(filename => {
    return req(filename)
  });
}

configure(loadStories, module);