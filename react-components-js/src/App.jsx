import "./App.css";
import { ModalOpenButton } from "./components/Modal";

function App() {
  return (
    <>
      <ModalOpenButton
        body={<>yoooo</>}
        buttonText="show modal"
        header="yo"
      />
    </>
  );
}

export default App;
