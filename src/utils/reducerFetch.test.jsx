import reducerFetch from './reducerFetch';

describe('reducerFetch', () => {
  it('should call isLoading', async function() {
    let mockDispatch = jest.fn();
    await reducerFetch('https://pokeapi.co/api/v2/pokemon/1', mockDispatch);
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('error loading', async function() {
    let mockDispatch = jest.fn();
    await reducerFetch('https://', mockDispatch);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
