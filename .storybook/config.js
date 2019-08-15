import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withConsole } from '@storybook/addon-console';

addDecorator(withA11y);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

const req = require.context('../src', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

const newViewports = {
  mobile: {
    name: 'Mobile',
    styles: {width: '320px', height: '568px'}
  },
  tablet: {
    name: 'Tablet',
    styles: {width: '768px', height: '1024px'}
  },
  laptop: {
    name: 'Laptop',
    styles: {width: '1200px', height: '1024px'}
  },
  desktop: {
    name: 'Desktop',
    styles: {width: '1366px', height: '1024px'}
  },
  wide: {
    name: 'Wide',
    styles: {width: '1920px', height: '1080px'}
  }
};

addParameters({ 
  viewport: {
    viewports: newViewports,
    defaultViewport: 'Mobile'
  }
});
