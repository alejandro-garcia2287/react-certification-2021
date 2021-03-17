import React from 'react';
import { render, screen } from '@testing-library/react';
import Detail from './Detail.page';
import mockedData from '../../youtube-videos-mock.json';
import themes from '../../theme/themes';
import VideoContext from '../../state/VideoProvider';
import CardList from '../../components/CardList/CardList.component';

const mockSelectVideoFunction = jest.fn();
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

describe('Video detail page tests', () => {
  const context = {
    state: {
      isLoading: true,
      data: mockedData,
      selectedVideo: video,
      currentTheme: themes.blue
    }
  };


  function renderDetailWithContext({context}) {
    return render(
      <VideoContext.Provider value={context}>
        <Detail video={video} />
      </VideoContext.Provider>);
  }

  it('should render detail view properly', () => {
    renderDetailWithContext({context});
    expect(screen.getByText('testTitle')).toBeDefined();
  });
});
