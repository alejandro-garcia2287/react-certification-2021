import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';

describe('App Component test', () => {
  it('Navbar defined', () => {
    render(<App />);
    expect(screen.getByText('React Challenge')).toBeDefined();
  });

  it('Navbar valid class ', () => {
    render(<App />);
    expect(screen.getByText('React Challenge').classList).toContain('navbar-brand');
  });

  it('Navbar type', () => {
    render(<App />);
    expect(screen.getByText('React Challenge').tagName).toBe('A');
  });

  it('Main title defined', () => {
    render(<App />);
    expect(screen.getByText('Video playlist')).toBeDefined();
  });

  it('Main title valid class ', () => {
    render(<App />);
    expect(screen.getByText('Video playlist').classList).toHaveLength(2);
  });

  it('Main title Playlist type', () => {
    render(<App />);
    expect(screen.getByText('Video playlist').tagName).toBe('H1');
  });
});
