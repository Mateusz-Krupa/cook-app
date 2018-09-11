
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '../src/components/Button/Button';
// import MainNavigation from '../src/components/MainNavigation/MainNavigation'
import TopBar from '../src/components/TopBar/TopBar'


storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));



// storiesOf('MainNavigation', module)
//   .add('normal', () => <Router><MainNavigation> </MainNavigation></Router>)
// ));


storiesOf('TopBar', module)
  .add('normal', () => <TopBar> Ble ble ble </TopBar>)
