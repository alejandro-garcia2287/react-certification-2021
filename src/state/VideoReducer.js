import themes from '../theme/themes';

const ACTIONS = {
  SET_IS_LOADING: 'SET_IS_LOADING',
  SET_DATA: 'SET_DATA',
  SET_SELECTED_VIDEO: 'SET_SELECTED_VIDEO',
  SET_THEME: 'SET_THEME',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAVORITES',
};

const CONSTANTS = {
  FAVORITES: 'favorites',
};

function addVideoToLocalStorage(video) {
  let favorites = localStorage.getItem(CONSTANTS.FAVORITES);

  if (!favorites) {
    favorites = [];
  } else {
    favorites = JSON.parse(favorites);
  }

  if (video) {
    favorites.push(video);
  }

  localStorage.setItem(CONSTANTS.FAVORITES, JSON.stringify(favorites));
  return favorites;
}

function removeVideoFromLocalStorage(video) {
  let favorites = localStorage.getItem(CONSTANTS.FAVORITES);
  if (!favorites) {
    favorites = [];
  } else {
    favorites = JSON.parse(favorites);
  }

  if (video) {
    favorites = favorites.filter((item) => item.id.videoId !== video.id.videoId);
  }

  localStorage.setItem(CONSTANTS.FAVORITES, JSON.stringify(favorites));
  return favorites;
}

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
    case ACTIONS.ADD_TO_FAVORITES: {
      const favoritesList = addVideoToLocalStorage(action.payload.video);
      return { ...state, favoritesList };
    }
    case ACTIONS.REMOVE_FROM_FAVORITES: {
      const favoritesList = removeVideoFromLocalStorage(action.payload.video);
      return { ...state, favoritesList };
    }
    default: {
      return state;
    }
  }
}

export { ACTIONS };
export default VideoReducer;
