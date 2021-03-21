import React from 'react';
import { render, screen } from '@testing-library/react';
import ProtectedRoute from './ProtectedRoute';
import VideoContext from '../../state/VideoProvider';
import mockedData from '../../youtube-videos-mock.json';
import themes from '../../theme/themes';
import { MemoryRouter } from 'react-router-dom';
import Favorites from '../../pages/Favorites/Favorites.page';

describe('Protected Route Test', () => {

  const contextSession = {
    state: {
      isLoading: false,
      data: mockedData,
      selectedVideo: undefined,
      currentTheme: themes.blue,
      loggedUser: {
        id: '123',
        name: 'Wizeline',
        avatarUrl:
          'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
      },
      favoritesList: [
        {
          kind: 'youtube#searchResult',
          etag: 'by0t_nrT2TB-IQkQpgSWUVUwpKI',
          id: {
            kind: 'youtube#video',
            videoId: 'Po3VwR_NNGk',
          },
          snippet: {
            publishedAt: '2019-03-05T03:52:55Z',
            channelId: 'UCXmAOGwFYxIq5qrScJeeV4g',
            title: 'Wizeline hace sentir a empleados como en casa',
            description:
              'En el 2014, Bismarck fundó Wizeline, compañía tecnológica que trabaja con los corporativos ofreciendo una plataforma para que desarrollen software de forma ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'El Economista TV',
            liveBroadcastContent: 'none',
            publishTime: '2019-03-05T03:52:55Z',
          },
        },
      ],
    },
    dispatch: () => {
    },
  };

  const contextNoSession = {
    state: {
      isLoading: false,
      data: mockedData,
      selectedVideo: undefined,
      currentTheme: themes.blue,
    },
    dispatch: () => {
    },
  };

  function renderProtectedRoute(context) {
    return render(
      <MemoryRouter initialEntries={['/users/2']}>
        <VideoContext.Provider value={context}>
          <ProtectedRoute path="/favorites" component={Favorites} />
        </VideoContext.Provider>
      </MemoryRouter>
    );
  }

  it('Existing session, favorite should be shown', () => {
    renderProtectedRoute(contextSession);
    expect(screen.getAllByText('')).toBeDefined();
  });

  it('No session, error should be shown', () => {
    renderProtectedRoute(contextNoSession);
    expect(screen.getAllByText('403: You don not have access to the requested page')).toBeDefined();
  });
});