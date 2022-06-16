import React from 'react';
import ReactDOM from 'react-dom';
import JobDetails from './JobDetails';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});