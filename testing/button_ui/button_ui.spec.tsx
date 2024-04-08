import React from 'react';
import { render } from '@testing-library/react';
import { BasicButtonUi } from './button_ui.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicButtonUi />);
  const rendered = getByText('Click me');
  expect(rendered).toBeTruthy();
});
