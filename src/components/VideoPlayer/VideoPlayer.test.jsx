import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoPlayer from './VideoPlayer.component';
import mockedData from '../../youtube-videos-mock.json';
import themes from '../../theme/themes';
import VideoContext from '../../state/VideoProvider';

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

describe('Video player tests', () => {
  const initialContext = {
    state: {
      isLoading: false,
      data: mockedData,
      selectedVideo: videoItem,
      currentTheme: themes.blue,
    },
    dispatch: () => {},
  };

  function renderVideoPlayerWithContext(context, video) {
    return render(
      <VideoContext.Provider value={context}>
        <VideoPlayer video={video} />
      </VideoContext.Provider>
    );
  }

  it('should render video interface', () => {
    renderVideoPlayerWithContext(initialContext, videoItem);
    expect(screen.getByText('testTitle')).toBeVisible();
  });
});
