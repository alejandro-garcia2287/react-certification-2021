import themes from '../theme/themes';

const ACTIONS = {
  SET_IS_LOADING: 'SET_IS_LOADING',
  SET_DATA: 'SET_DATA',
  SET_SELECTED_VIDEO: 'SET_SELECTED_VIDEO',
  SET_THEME: 'SET_THEME',
};

function VideoReducer(state, action) {
  const { isLoading, data, selectedVideo } = action.payload;
  switch (action.type) {
    case ACTIONS.SET_IS_LOADING: {
      return { ...state, isLoading };
    }
    case ACTIONS.SET_DATA: {
      return { ...state, data };
    }
    case ACTIONS.SET_SELECTED_VIDEO: {
      return { ...state, selectedVideo };
    }
    case ACTIONS.SET_THEME: {
      return { ...state, currentTheme: themes[action.payload.theme] };
    }
    default: {
      return state;
    }
  }
}

export { ACTIONS };
export default VideoReducer;
