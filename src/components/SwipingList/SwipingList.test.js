import React from 'react';
import ReactDOM from 'react-dom';
import SwipingList from './SwipingList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SwipingList />, div);
  ReactDOM.unmountComponentAtNode(div);
});