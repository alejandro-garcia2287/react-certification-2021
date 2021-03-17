import React from 'react';
import VideoReducer, { ACTIONS } from './VideoReducer';
import mockedData from '../youtube-videos-mock.json';
import themes from '../theme/themes';

describe('Video Reducer tests', () => {
  let state = {
    isLoading: false,
    data: [],
    selectedVideo: undefined,
    currentTheme: themes.blue,
  };

  it('SET_IS_LOADING', () => {
    let action = { type: ACTIONS.SET_IS_LOADING, payload: { isLoading: true } };
    const { isLoading } = VideoReducer(state, action);
    expect(isLoading).toBeTruthy();
  });

  it('SET_DATA', () => {
    let action = { type: ACTIONS.SET_SELECTED_VIDEO, payload: { selectedVideo: mockedData.items[2] } };
    const { selectedVideo } = VideoReducer(state, action);
    expect(selectedVideo).toBe(mockedData.items[2]);
  });

  it('SET_SELECTED_VIDEO', () => {
    let action = { type: ACTIONS.SET_DATA, payload: { data: mockedData } };
    const { data } = VideoReducer(state, action);
    expect(data).toBe(mockedData);
  });

  it('SET_THEME', () => {
    let action = { type: ACTIONS.SET_THEME, payload: { theme: 'dark' } };
    const { currentTheme } = VideoReducer(state, action);
    expect(currentTheme).toBe(themes.dark);
  });

  it('DEFAULT', () => {
    let action = { type: 'undefined', payload: { theme: 'dark' } };
    const updatedState = VideoReducer(state, action);
    expect(updatedState).toBe(state);
  });
});