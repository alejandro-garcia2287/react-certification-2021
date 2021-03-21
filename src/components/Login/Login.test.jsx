import React from 'react';
import LoginModal from './Login.component';
import { render } from '@testing-library/react';
import VideoContext from '../../state/VideoProvider';
import mockedData from '../../youtube-videos-mock.json';
import themes from '../../theme/themes';

const initialContext = {
  state: {
    isLoading: true,
    data: mockedData,
    selectedVideo: undefined,
    currentTheme: themes.blue,
  },
  dispatch: jest.fn(),
};

describe('Login', () => {
  function renderLoginModalWithContext(context) {
    return render(
      <VideoContext.Provider value={context}>
        <LoginModal />
      </VideoContext.Provider>,
    );
  }

  it('should render login screen', () => {
    const { container } = renderLoginModalWithContext(initialContext);
    expect(container).toBeTruthy();
  });
});