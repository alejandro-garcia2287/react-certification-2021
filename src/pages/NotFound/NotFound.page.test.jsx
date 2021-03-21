import React from 'react';
import NotFound from './NotFound.page';
import { render, screen } from '@testing-library/react';

describe('Not found screen', () => {
  it('should be rendered', () => {
    render(<NotFound />);
    expect(screen.getByText('404: The requested page was not found')).toBeDefined();
  });
});