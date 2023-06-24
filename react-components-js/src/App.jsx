import "./App.css";
import Form from "./components/Form";
import { ShowModalButton } from "./components/Modal";

function App() {
  const formState = {
    pages: [
      {
        name: { value: "", msg: "name is required" },
        email: { value: "", msg: "email is required" },
      },
      {
        username: { value: "", msg: "username is required" },
        password: { value: "", msg: "password is required" },
      },
      {
        birthday: { value: "", msg: "birthday is required" },
        tel: { value: "", msg: "phone number is required" },
      },
    ],
  };

  const formState1 = {
    name: { value: "", msg: "name is required" },
    email: { value: "", msg: "email is required" },
    password: { value: "", msg: "password is required" },
  };

  return (
    <>
      <ShowModalButton
        body={<Form formState={formState} />}
        buttonText="show modal"
        header="yo"
      />
      <ShowModalButton
        body={<Form formState={formState1} />}
        buttonText="show modal"
        header="yo"
      />
    </>
  );
}

export default App;
