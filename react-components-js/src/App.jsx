import "./App.css";
import Input from "./components/Input";
import { ShowModalButton } from "./components/Modal";

function App() {
  return (
    <>
      <ShowModalButton
        body={<>yoooo</>}
        buttonText="show modal"
        header="yo"
      />
      <Input id="name" placeholder="Name" />
      <Input id="email" placeholder="Email" />
      <Input id="phone" placeholder="Phone" />
    </>
  );
}

export default App;
