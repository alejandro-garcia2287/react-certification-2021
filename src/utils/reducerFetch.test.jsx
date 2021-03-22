import reducerFetch from './reducerFetch';

describe('reducerFetch', () => {
  it('should call isLoading', async () => {
    const mockDispatch = jest.fn();
    await reducerFetch('https://pokeapi.co/api/v2/pokemon/1', mockDispatch);
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('error loading', async () => {
    const mockDispatch = jest.fn();
    await reducerFetch('https://', mockDispatch);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
