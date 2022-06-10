import React from 'react';
import ReactDOM from 'react-dom';
import CompanyLogo from './CompanyLogo';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompanyLogo />, div);
  ReactDOM.unmountComponentAtNode(div);
});