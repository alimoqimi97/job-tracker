import React from 'react';
import ReactDOM from 'react-dom';
import JobOpportunity from './JobOpportunity';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobOpportunity />, div);
  ReactDOM.unmountComponentAtNode(div);
});