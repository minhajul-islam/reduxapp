import React from 'react';
import {Provider} from 'react-redux';
import Application from './src/index';
import reduxStore from './reduxStore';

export default () => {
  return (
      <Provider store={reduxStore}>
        <Application/>
      </Provider>
  )
}
