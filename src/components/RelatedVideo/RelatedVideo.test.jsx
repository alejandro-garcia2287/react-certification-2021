import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import RelatedVideo from './RelatedVideo.component';
import mockedData from '../../youtube-videos-mock.json';
import themes from '../../theme/themes';
import VideoContext from '../../state/VideoProvider';

describe('Related Video tests', () => {
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

  const context = {
    state: {
      isLoading: false,
      data: mockedData,
      selectedVideo: video,
      currentTheme: themes.blue,
    }, dispatch: () => {
    },
  };

  function renderRelatedVideoWithContext({ context, video }) {
    return render(
      <VideoContext.Provider value={context}>
        <RelatedVideo video={video} tabIndex="0" />
      </VideoContext.Provider>);
  }

  it('Related Video defined', () => {
    renderRelatedVideoWithContext({ context, video });
    expect(screen.getByText('testTitle')).toBeDefined();
  });

  it('Click handling test', () => {
    const dispatchMockFunction = jest.fn();
    context.dispatch = dispatchMockFunction;
    renderRelatedVideoWithContext({ context, video });
    const leftClick = { button: 1 };
    fireEvent.click(screen.getAllByRole('button')[0], leftClick);
    expect(dispatchMockFunction).toBeCalledTimes(1);
  });

  it('Keydown test', () => {
    const dispatchMockFunction = jest.fn();
    context.dispatch = dispatchMockFunction;
    renderRelatedVideoWithContext({ context, video });
    fireEvent.keyDown(screen.getAllByRole('button')[1], { key: 'Enter', keyCode: '13' });
    expect(dispatchMockFunction).toBeCalledTimes(1);
  });
});
