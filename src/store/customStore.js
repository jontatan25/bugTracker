import reducer from "./bugs";

function createStore(reducer) {
  let state;
  let listeners = [];

function subscribe(listener) {
    listeners.push(listener)
    listener()
}
  function dispatch(action) {
    // call reducer to get new state
    state = reducer(state, action);
    // Notify Subscribers
    for (let i = 0; i < listeners.length; i++) {
       listeners[i]();
    }
  }
  function getState() {
    return state;
  }
  return { subscribe,dispatch, getState };
}
export default createStore(reducer);
