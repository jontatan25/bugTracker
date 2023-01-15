import reducer from "./reducer";

function createStore(reducer) {
  let state;

  function dispatch(action) {
    // call reducer to get new state
    state = reducer(state, action);
    // Notify Subscribers
  }
  function getState() {
    return state;
  }
  return { dispatch, getState };
}
export default createStore(reducer);
