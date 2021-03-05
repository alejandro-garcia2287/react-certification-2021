import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
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

  it('Search video input enter test', async () => {
    jest.useFakeTimers();
    const apiClientMock = jest.fn();
    const selectVideo = jest.fn();
    await act(async () => {
      render(
        <AppNavbar
          brand="React Challenge"
          navLinkHref="/home"
          navLinkText="Home"
          apiClient={apiClientMock}
          selectVideo={selectVideo}
        />
      );
      fireEvent.change(screen.getByPlaceholderText('Search'), { key: 'A', keyCode: 65 });
      fireEvent.keyDown(screen.getByPlaceholderText('Search'), {
        key: 'Enter',
        keyCode: 13,
      });
    });

    await waitFor(() => expect(apiClientMock).toBeCalledTimes(1));
  });

  it('Search video input on change test', async () => {
    jest.useFakeTimers();
    const apiClientMock = jest.fn();
    const selectVideo = jest.fn();
    await act(async () => {
      render(
        <AppNavbar
          brand="React Challenge"
          navLinkHref="/home"
          navLinkText="Home"
          apiClient={apiClientMock}
          selectVideo={selectVideo}
        />
      );
      fireEvent.change(screen.getByPlaceholderText('Search'), {
        target: { value: 'Search text' },
      });
    });

    await waitFor(() => expect(apiClientMock).toBeCalledTimes(1));
  });
});
