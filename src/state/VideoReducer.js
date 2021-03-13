const ACTIONS = {
  SET_IS_LOADING: 'SET_IS_LOADING',
  SET_DATA: 'SET_DATA',
  SET_SELECTED_VIDEO: 'SET_SELECTED_VIDEO',
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
    default: {
      return state;
    }
  }
}

export { ACTIONS };
export default VideoReducer;
