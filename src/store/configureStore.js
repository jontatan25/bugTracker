import { createStore } from "redux";

import reducer from "./bugs";

export default function configureStore() {
  const store = createStore(
    reducer,
    //   STORE ENHANCER
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
