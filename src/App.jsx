import { AuthProvider } from "./context/AuthProvider";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <AuthProvider>
      <Main />

      <div>
        <p>{counter}</p>
        <button
          onClick={() => {
            setCounter((valor) => valor + 1);
          }}
        >
          +
        </button>
      </div>
    </AuthProvider>
  );
}

export default App;
