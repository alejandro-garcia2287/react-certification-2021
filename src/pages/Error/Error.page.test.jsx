import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './Error.page';

describe('Not found screen', () => {
  it('should be rendered', () => {
    const reason = '404: The requested page was not found';
    render(<NotFound reason={reason} />);
    expect(screen.getByText(reason)).toBeDefined();
  });
});
