import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Timer from './timer';
import Weather from './weather';
import Graph from './graph';
import AnalogueClock from './analogueClock';
require('../styles/application.scss')

storiesOf('Timer', module)
  .add('just plane', () => (
    <Timer/>
  ))

storiesOf('Weather', module)
  .add('just plane', () => (
    <Weather/>
  ))

storiesOf('Graph', module)
  .add('just plane', () => (
    <Graph/>
  ))

storiesOf('AnalogueClock', module)
  .add('just plane', () => (
    <AnalogueClock/>
  ))

