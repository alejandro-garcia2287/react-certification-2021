import React from 'react';
import { render, screen } from '@testing-library/react';
import mockedData from '../../youtube-videos-mock.json';
import themes from '../../theme/themes';
import VideoContext from '../../state/VideoProvider';
import Favorites from './Favorites.page';

describe('Favorite Page tests', () => {
  const contextNoFavorites = {
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
    },
    dispatch: () => {},
  };

  const contextFavorites = {
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
    dispatch: () => {},
  };

  function renderFavoritesWithContext(context) {
    return render(
      <VideoContext.Provider value={context}>
        <Favorites />
      </VideoContext.Provider>
    );
  }

  it('Favorite page defined', () => {
    renderFavoritesWithContext(contextFavorites);
    expect(screen.getByText('Favorite Videos')).toBeDefined();
  });

  it('Favorite page defined but no videos added', () => {
    renderFavoritesWithContext(contextNoFavorites);
    expect(screen.getByText("You don't have favorite videos.")).toBeDefined();
  });
});
