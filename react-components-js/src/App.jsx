import { Route, Switch } from "react-router-dom";
import "./App.css";
// import Form from "./components/Form";
import Layout from "./components/Layout";
// import { ShowModalButton } from "./components/Modal";
import ProfilePage from "./components/ProfilePage";

function App() {
  // const formState = {
  //   pages: [
  //     {
  //       name: { value: "", msg: "name is required" },
  //       email: { value: "", msg: "email is required" },
  //     },
  //     {
  //       username: { value: "", msg: "username is required" },
  //       password: { value: "", msg: "password is required" },
  //     },
  //     {
  //       birthday: { value: "", msg: "birthday is required" },
  //       tel: { value: "", msg: "phone number is required" },
  //     },
  //   ],
  // };

  // const formState1 = {
  //   name: { value: "", msg: "name is required" },
  //   email: { value: "", msg: "email is required" },
  //   password: { value: "", msg: "password is required" },
  // };

  // const formState2 = {
  //   name: { value: "", msg: "name is required" },
  //   email: { value: "", msg: "email is required" },
  //   password: { value: "", msg: "password is required" },
  //   password1: { value: "", msg: "password is required" },
  //   password2: { value: "", msg: "password is required" },
  //   password3: { value: "", msg: "password is required" },
  // };

  return (
    <Layout>
      {/* <ShowModalButton
        body={<Form formState={formState} />}
        buttonText="show modal"
        header="yo"
      />
      <ShowModalButton
        body={<Form formState={formState1} />}
        buttonText="show modal"
        header="yo"
      />
      <ShowModalButton
        body={<Form formState={formState2} />}
        buttonText="show modal"
        header="yo"
      /> */}
      <Switch>
        <Route
          component={() => <>challenges comming soon</>}
          path="/challenges"
        />
        <Route
          component={() => <>communites comming soon</>}
          path="/communities"
        />
        <Route component={ProfilePage} path="/:userId" />
      </Switch>
    </Layout>
  );
}

export default App;
