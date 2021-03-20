import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Card from './Card.component';
import mockedData from '../../youtube-videos-mock.json';
import themes from '../../theme/themes';
import VideoContext from '../../state/VideoProvider';
import { MemoryRouter } from 'react-router-dom';

describe('Card Component tests', () => {
  const item = {
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

  const context = {
    state: {
      isLoading: true,
      data: mockedData,
      selectedVideo: undefined,
      currentTheme: themes.blue,
    }, dispatch: jest.fn(),
  };


  function renderCardWithContext({ context, item }) {
    return render(
      <MemoryRouter initialEntries={['/users/2']}>
        <VideoContext.Provider value={context}>
          <Card item={item} tabIndex="0" />
        </VideoContext.Provider>);
      </MemoryRouter>
    );
  }

  it('Card Description defined', () => {
    renderCardWithContext({ context, item });
    expect(screen.getByText('testDescription')).toBeDefined();
  });

  it('Card Title defined', () => {
    renderCardWithContext({ context, item });
    expect(screen.getByText('testTitle')).toBeDefined();
  });

  it('Card Title type', () => {
    renderCardWithContext({ context, item });
    expect(screen.getByText('testTitle').tagName).toBe('B');
  });

  it('Card Description type', () => {
    renderCardWithContext({ context, item });
    expect(screen.getByText('testDescription').tagName).toBe('P');
  });

  it('Card Description class', () => {
    renderCardWithContext({ context, item });
    expect(screen.getByText('testDescription').classList).toHaveLength(2);
  });

  it('Card Title class', () => {
    renderCardWithContext({ context, item });
    expect(screen.getByText('testTitle').classList).toHaveLength(0);
  });

  it('Click handling test', () => {
    renderCardWithContext({ context, item });
    const leftClick = { button: 1 };
    fireEvent.click(screen.getByText('testTitle'), leftClick);
    expect(context.dispatch).toHaveBeenCalled();
  });

  it('Keydown test', () => {
    renderCardWithContext({ context, item });
    fireEvent.keyDown(screen.getByText('testTitle'), { key: 'Enter', keyCode: 13 });
    expect(context.dispatch).toHaveBeenCalled();
  });
});
