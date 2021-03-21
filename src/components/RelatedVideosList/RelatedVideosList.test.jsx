import React from 'react';
import { render, screen } from '@testing-library/react';
import RelatedVideosList from './RelatedVideosList.component';
import mockDataInput from '../../youtube-videos-mock.json';
import themes from '../../theme/themes';
import VideoContext from '../../state/VideoProvider';

const mockSetUri = jest.fn(() => 'foo');
let mockIsLoading = false;

jest.mock('../../hooks/useFetch', () => {
  return jest.fn(() => {
    return [mockIsLoading, mockDataInput, mockSetUri];
  });
});

describe('Related Video List tests', () => {
  const videoItem = {
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
      isLoading: false,
      data: mockDataInput,
      selectedVideo: videoItem,
      currentTheme: themes.blue,
    },
    dispatch: jest.fn(),
  };

  function renderRelatedVideoListWithContext(context, video) {
    return render(
      <VideoContext.Provider value={context}>
        <RelatedVideosList video={video} />
      </VideoContext.Provider>
    );
  }

  it('should render video list', () => {
    mockIsLoading = true;
    renderRelatedVideoListWithContext(initialContext, videoItem);
    expect(screen.getByText('Loading')).toBeVisible();
  });

  it('should render related videos', () => {
    mockIsLoading = false;
    renderRelatedVideoListWithContext(initialContext, videoItem);
    expect(
      screen.getByText('Video Tour | Welcome to Wizeline Guadalajara')
    ).toBeVisible();
  });
});
