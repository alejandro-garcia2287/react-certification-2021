import { ACTIONS } from '../state/VideoReducer';

async function reducerFetch(url, dispatch) {
  function setIsLoading(isLoading) {
    dispatch({ type: ACTIONS.SET_IS_LOADING, payload: { isLoading } });
  }

  function setData(data) {
    dispatch({ type: ACTIONS.SET_DATA, payload: { data } });
  }

  try {
    setIsLoading(true);
    const response = await fetch(url);
    const jsonResponse = await response.json();
    setData(jsonResponse);
    setIsLoading(false);
  } catch (e) {
    setIsLoading(false);
  }
}

export default reducerFetch;
