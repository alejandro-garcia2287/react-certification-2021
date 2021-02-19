import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home.page';

describe('Home Page Component tests', () => {
  it('Home page defined', () => {
    render(<Home />);
    expect(screen.getByText('Video playlist')).toBeDefined();
  });

  it('Title visible', () => {
    render(<Home />);
    expect(screen.getByText('Video playlist').tagName).toBe('H1');
  });
});
