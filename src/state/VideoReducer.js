import themes from '../theme/themes';

const ACTIONS = {
  SET_IS_LOADING: 'SET_IS_LOADING',
  SET_DATA: 'SET_DATA',
  SET_SELECTED_VIDEO: 'SET_SELECTED_VIDEO',
  SET_THEME: 'SET_THEME',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
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
    case ACTIONS.LOGIN: {
      return { ...state, loggedUser: action.payload.loggedUser };
    }
    case ACTIONS.LOGOUT: {
      return { ...state, loggedUser: undefined };
    }
    default: {
      return state;
    }
  }
}

export { ACTIONS };
export default VideoReducer;
