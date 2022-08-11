import { AuthProvider } from "./context/AuthProvider";
import useAuth from "./hooks/useAuth";
import Main from "./components/Main";

function App() {
  return (
    <AuthProvider>
      <Main/>
    </AuthProvider>
  );
}

export default App;
