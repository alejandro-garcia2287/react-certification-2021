import React from 'react';
import { render, screen } from '@testing-library/react';
import AppNavbar from './AppNavbar.component';

describe('Navbar Component tests', () => {
  it('Navbar brand defined', () => {
    render(<AppNavbar brand="React Challenge" navLinkHref="/home" navLinkText="Home" />);
    expect(screen.getByText('React Challenge')).toBeDefined();
  });

  it('Navbar Home defined', () => {
    render(<AppNavbar brand="React Challenge" navLinkHref="/home" navLinkText="Home" />);
    expect(screen.getByText('Home')).toBeDefined();
  });

  it('Navbar brand login button defined', () => {
    render(<AppNavbar brand="React Challenge" navLinkHref="/home" navLinkText="Home" />);
    expect(screen.getByText('Login')).toBeDefined();
  });

  it('Navbar brand class', () => {
    render(<AppNavbar brand="React Challenge" navLinkHref="/home" navLinkText="Home" />);
    expect(screen.getByText('React Challenge').classList).toContain('navbar-brand');
  });

  it('Navbar Home class', () => {
    render(<AppNavbar brand="React Challenge" navLinkHref="/home" navLinkText="Home" />);
    expect(screen.getByText('Home').classList).toContain('nav-link');
  });
});
