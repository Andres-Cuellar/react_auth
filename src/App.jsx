import { AtuhProvider } from "./context/AuthProvider";
import Form from "./components/Form";

function App() {
  return (
    <AtuhProvider>
      <Form />
    </AtuhProvider>
  );
}

export default App;
