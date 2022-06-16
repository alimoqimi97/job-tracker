import React from 'react';
import ReactDOM from 'react-dom';
import FilterLabels from './FilterLabels';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilterLabels />, div);
  ReactDOM.unmountComponentAtNode(div);
});