import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home.page';
import mockedData from '../../youtube-videos-mock.json';
import themes from '../../theme/themes';
import VideoContext from '../../state/VideoProvider';

describe('Home Page Component tests', () => {
  const initialContext = {
    state: {
      isLoading: false,
      data: mockedData,
      selectedVideo: undefined,
      currentTheme: themes.blue,
    },
    dispatch: () => {},
  };

  function renderHomeWithContext(context) {
    return render(
      <VideoContext.Provider value={context}>
        <Home />
      </VideoContext.Provider>
    );
  }

  it('Home page defined', () => {
    renderHomeWithContext(initialContext);
    expect(screen.getByText('Video playlist')).toBeDefined();
  });

  it('Title visible', () => {
    renderHomeWithContext(initialContext);
    expect(screen.getByText('Video playlist').tagName).toBe('H1');
  });
});
