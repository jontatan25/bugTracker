import "./App.css";
import { useEffect, useState } from "react";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

function App({ store }) {
  const [reduxStore, setReduxStore] = useState(null);
  // unsuscribe, returned from subscription function
  // important to prevent memory leaks
  const unsuscribe = store.subscribe(() => {
    console.log("store changed!", store.getState());
    const updatedStore = store.getState();
    setReduxStore(updatedStore);
  });
  // and then we call it
  // unsubscribe()
  const handleDispatch = () => {
    bugAdded("Bug 1");
  };

  // RESOLVING BUG
  // const handleDispatch = () => {
  //   bugResolved(1)
  // };

  const handleDelete = () => {
   bugRemoved(("Bug 1"))
  };

  useEffect(() => {
    console.log("store changed!");
    console.log(reduxStore);
  }, [reduxStore]);

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
