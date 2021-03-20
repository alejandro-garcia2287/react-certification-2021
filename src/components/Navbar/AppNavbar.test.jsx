import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import AppNavbar from './AppNavbar.component';
import mockedData from '../../youtube-videos-mock.json';
import themes from '../../theme/themes';
import VideoContext from '../../state/VideoProvider';
import { MemoryRouter } from 'react-router-dom';

describe('Navbar Component tests', () => {
  const context = {
    state: {
      isLoading: false,
      data: mockedData,
      selectedVideo: {},
      currentTheme: themes.blue,
    }, dispatch: () => {
    },
  };

  function renderAppNavbarWithContext({ context }) {
    return render(
      <MemoryRouter initialEntries={['/']}>
        <VideoContext.Provider value={context}>
          <AppNavbar brand="React Challenge" navLinkHref="/home" navLinkText="Home" />
        </VideoContext.Provider>
      </MemoryRouter>
    );
  }

  it('Navbar brand defined', () => {
    renderAppNavbarWithContext({ context });
    expect(screen.getByText('React Challenge')).toBeDefined();
  });

  it('Navbar Home defined', () => {
    renderAppNavbarWithContext({ context });
    expect(screen.getByText('Home')).toBeDefined();
  });

  it('Navbar brand login button defined', () => {
    renderAppNavbarWithContext({ context });
    expect(screen.getByText('Login')).toBeDefined();
  });

  it('Navbar brand class', () => {
    renderAppNavbarWithContext({ context });
    expect(screen.getByText('React Challenge').classList).toContain('navbar-brand');
  });

  it('Navbar Home class', () => {
    renderAppNavbarWithContext({ context });
    expect(screen.getByText('Home').classList).toContain('nav-link');
  });

  it('Search video input enter test', async () => {
    jest.useFakeTimers();
    const mockDispatch = jest.fn();
    await act(async () => {
      context.dispatch = mockDispatch;
      renderAppNavbarWithContext({ context });
      fireEvent.change(screen.getByPlaceholderText('Search'), { key: 'A', keyCode: 65 });
      fireEvent.keyDown(screen.getByPlaceholderText('Search'), {
        key: 'Enter',
        keyCode: 13,
      });
    });

    await waitFor(() => expect(mockDispatch).toHaveBeenCalled());
  });

  it('Search video input on change test', async () => {
    jest.useFakeTimers();
    const mockDispatch = jest.fn();
    await act(async () => {
      context.dispatch = mockDispatch;
      renderAppNavbarWithContext({ context });

      fireEvent.change(screen.getByPlaceholderText('Search'), {
        target: { value: 'Search text' },
      });
    });

    await waitFor(() => expect(mockDispatch).toHaveBeenCalled());
  });
});
