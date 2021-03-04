import { renderHook, act } from '@testing-library/react-hooks/dom'; // will use react-dom
import useFetch from './useFetch';
import mockData from '../youtube-videos-mock.json';

describe('useFetch Hook tests', () => {
  function setupFetchStub(data) {
    return function fetchStub() {
      return new Promise((resolve) => {
        resolve({
          json: () =>
            Promise.resolve({
              data,
            }),
        });
      });
    };
  }

  beforeEach(() => {
    act(() => {
      global.fetch = jest.fn().mockImplementation(setupFetchStub(mockData));
    });
  });

  afterEach(() => {
    act(() => {
      global.fetch.mockClear();
      delete global.fetch;
    });
  });

  it('should be created successfully', async () => {
    const { result } = renderHook(() => useFetch());
    const [isLoading, data, setUri] = result.current;

    act(() => {
      setUri('test');
    });

    expect(isLoading).toBeTruthy();
    expect(data).toBeDefined();
  });

  it('should process http request successfully', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch());

    const [isLoading, data, setUri] = result.current;
    act(() => {
      setUri('test');
    });

    await waitForNextUpdate();
    expect(isLoading).toBeTruthy();
    expect(data).toBeDefined();
  });
});
