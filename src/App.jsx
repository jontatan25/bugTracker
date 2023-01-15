import "./App.css";
import { useEffect, useState } from "react";
import configureStore from "./store/configureStore";
import * as  actions from "./store/bugs"

function App({ store }) {
  const [reduxStore, setReduxStore] = useState(null);

  store.subscribe(() => {
    console.log("store changed");
  });

  const handleDispatch = () => {
    store.dispatch(actions.bugAdded({description: "bugAdded"}));
  };
  const handleDelete = () => {
    //  bugRemoved(("Bug 1"))
  };

  // useEffect(() => {
  //   console.log("store changed!");
  //   console.log(reduxStore);
  // }, [reduxStore]);

  console.log(store.getState());
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => handleDispatch}>DISPATCH BUG</button>
        <button onClick={() => handleDelete}>DELETE BUG</button>
      </header>
    </div>
  );
}

export default App;
