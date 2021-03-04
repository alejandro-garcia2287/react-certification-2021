import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Card from './Card.component';

describe('Card Component tests', () => {
  const item = {
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

  it('Card Description defined', () => {
    render(<Card selectVideoFunction={() => {}} item={item} tabIndex="0" />);
    expect(screen.getByText('testDescription')).toBeDefined();
  });

  it('Card Title defined', () => {
    render(<Card selectVideoFunction={() => {}} item={item} tabIndex="0" />);
    expect(screen.getByText('testTitle')).toBeDefined();
  });

  it('Card Title type', () => {
    render(<Card selectVideoFunction={() => {}} item={item} tabIndex="0" />);
    expect(screen.getByText('testTitle').tagName).toBe('B');
  });

  it('Card Description type', () => {
    render(<Card selectVideoFunction={() => {}} item={item} tabIndex="0" />);
    expect(screen.getByText('testDescription').tagName).toBe('P');
  });

  it('Card Description class', () => {
    render(<Card selectVideoFunction={() => {}} item={item} tabIndex="0" />);
    expect(screen.getByText('testDescription').classList).toHaveLength(2);
  });

  it('Card Title class', () => {
    render(<Card selectVideoFunction={() => {}} item={item} tabIndex="0" />);
    expect(screen.getByText('testTitle').classList).toHaveLength(0);
  });

  it('Click handling test', () => {
    const selectVideoMockFn = jest.fn();
    render(<Card selectVideoFunction={selectVideoMockFn} item={item} tabIndex="0" />);
    const leftClick = { button: 1 };
    fireEvent.click(screen.getByText('testTitle'), leftClick);
    expect(selectVideoMockFn).toBeCalledTimes(1);
  });

  it('Keydown test', () => {
    const selectVideoMockFn = jest.fn();
    render(<Card selectVideoFunction={selectVideoMockFn} item={item} tabIndex="0" />);
    fireEvent.keyDown(screen.getByText('testTitle'), { key: 'Enter', keyCode: 13 });
    expect(selectVideoMockFn).toBeCalledTimes(1);
  });
});
