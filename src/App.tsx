import { useCallback } from "react";
import "./App.css";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SDB: any;
  }
}

function App() {
  const onHandlePostMessage = useCallback(() => {
    const windowSDB = window?.SDB;
    if (windowSDB !== undefined) {
      windowSDB?.postMessage(`{ key: "value"}`);
    }
  }, []);

  return (
    <>
      <button onClick={onHandlePostMessage}>Post Message</button>
    </>
  );
}

export default App;
