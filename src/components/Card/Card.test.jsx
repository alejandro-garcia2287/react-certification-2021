import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from './Card.component';
import mockedData from '../../youtube-videos-mock.json';
import themes from '../../theme/themes';
import VideoContext from '../../state/VideoProvider';

describe('Card Component tests', () => {
  const video = {
    kind: 'youtube#searchResult',
    etag: 'KiCPD9wpstDwl9KObd9o957BneA',
    id: {
      kind: 'youtube#video',
      videoId: '5b7pwgBQPZs',
    },
    snippet: {
      publishedAt: '2020-06-23T23:17:34Z',
      channelId: 'UC0v-tlzsn0QZwJnkiaUSJVQ',
      title: 'testTitle',
      description: 'testDescription',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/5b7pwgBQPZs/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/5b7pwgBQPZs/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/5b7pwgBQPZs/hqdefault.jpg',
          width: 480,
          height: 360,
        },
        standard: {
          url: 'https://i.ytimg.com/vi/5b7pwgBQPZs/sddefault.jpg',
          width: 640,
          height: 480,
        },
        maxres: {
          url: 'https://i.ytimg.com/vi/5b7pwgBQPZs/maxresdefault.jpg',
          width: 1280,
          height: 720,
        },
      },
      channelTitle: 'REACT',
      liveBroadcastContent: 'none',
      publishTime: '2020-06-23T23:17:34Z',
    },
  };

  const initialContext = {
    state: {
      isLoading: true,
      data: mockedData,
      selectedVideo: undefined,
      currentTheme: themes.blue,
    },
    dispatch: jest.fn(),
  };

  function renderCardWithContext(context, item) {
    return render(
      <MemoryRouter initialEntries={['/users/2']}>
        <VideoContext.Provider value={context}>
          <Card item={item} tabIndex="0" />
        </VideoContext.Provider>
        );
      </MemoryRouter>
    );
  }

  it('Card Description defined', () => {
    renderCardWithContext(initialContext, video);
    expect(screen.getByText('testDescription')).toBeDefined();
  });

  it('Card Title defined', () => {
    renderCardWithContext(initialContext, video);
    expect(screen.getByText('testTitle')).toBeDefined();
  });

  it('Card Title type', () => {
    renderCardWithContext(initialContext, video);
    expect(screen.getByText('testTitle').tagName).toBe('B');
  });

  it('Card Description type', () => {
    renderCardWithContext(initialContext, video);
    expect(screen.getByText('testDescription').tagName).toBe('P');
  });

  it('Card Description class', () => {
    renderCardWithContext(initialContext, video);
    expect(screen.getByText('testDescription').classList).toHaveLength(2);
  });

  it('Card Title class', () => {
    renderCardWithContext(initialContext, video);
    expect(screen.getByText('testTitle').classList).toHaveLength(0);
  });

  it('Click handling test', () => {
    renderCardWithContext(initialContext, video);
    const leftClick = { button: 1 };
    fireEvent.click(screen.getByText('testTitle'), leftClick);
    expect(initialContext.dispatch).toHaveBeenCalled();
  });

  it('Keydown test', () => {
    renderCardWithContext(initialContext, video);
    fireEvent.keyDown(screen.getByText('testTitle'), { key: 'Enter', keyCode: 13 });
    expect(initialContext.dispatch).toHaveBeenCalled();
  });
});
