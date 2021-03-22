import VideoReducer, { ACTIONS } from './VideoReducer';
import mockedData from '../youtube-videos-mock.json';
import themes from '../theme/themes';

describe('Video Reducer tests', () => {
  const state = {
    isLoading: false,
    data: [],
    selectedVideo: undefined,
    currentTheme: themes.blue,
  };

  it('SET_IS_LOADING', () => {
    const action = { type: ACTIONS.SET_IS_LOADING, payload: { isLoading: true } };
    const { isLoading } = VideoReducer(state, action);
    expect(isLoading).toBeTruthy();
  });

  it('SET_DATA', () => {
    const action = {
      type: ACTIONS.SET_SELECTED_VIDEO,
      payload: { selectedVideo: mockedData.items[2] },
    };
    const { selectedVideo } = VideoReducer(state, action);
    expect(selectedVideo).toBe(mockedData.items[2]);
  });

  it('SET_SELECTED_VIDEO', () => {
    const action = { type: ACTIONS.SET_DATA, payload: { data: mockedData } };
    const { data } = VideoReducer(state, action);
    expect(data).toBe(mockedData);
  });

  it('SET_THEME', () => {
    const action = { type: ACTIONS.SET_THEME, payload: { theme: 'dark' } };
    const { currentTheme } = VideoReducer(state, action);
    expect(currentTheme).toBe(themes.dark);
  });

  it('DEFAULT', () => {
    const action = { type: 'undefined', payload: { theme: 'dark' } };
    const updatedState = VideoReducer(state, action);
    expect(updatedState).toBe(state);
  });

  it('LOGIN', () => {
    const mockedUser = {
      id: '123',
      name: 'Wizeline',
      avatarUrl:
        'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
    };
    const action = { type: 'LOGIN', payload: { loggedUser: mockedUser } };
    const updatedState = VideoReducer(state, action);
    expect(updatedState.loggedUser).toBe(mockedUser);
  });

  it('LOGOUT', () => {
    const action = { type: 'LOGOUT', payload: {} };
    const updatedState = VideoReducer(state, action);
    expect(updatedState.loggedUser).toBeFalsy();
  });

  it('ADD_TO_FAVORITES', () => {
    const action = {
      type: ACTIONS.ADD_TO_FAVORITES,
      payload: { video: mockedData.items[3] },
    };
    const { favoritesList } = VideoReducer(state, action);
    expect(favoritesList).toBeTruthy();
    expect(favoritesList.length).toBeGreaterThan(0);
  });

  it('REMOVE_FROM_FAVORITES', () => {
    const action = {
      type: ACTIONS.ADD_TO_FAVORITES,
      payload: { video: mockedData.items[3] },
    };
    const { favoritesList } = VideoReducer(state, action);
    expect(favoritesList).toBeTruthy();
    expect(favoritesList.length).toBeGreaterThan(0);

    const removeAction = {
      type: ACTIONS.REMOVE_FROM_FAVORITES,
      payload: { video: mockedData.items[3] },
    };
    const { favoritesList: afterRemoved } = VideoReducer(state, removeAction);
    expect(afterRemoved).toBeTruthy();
    expect(afterRemoved.length).toBe(0);
  });
});
