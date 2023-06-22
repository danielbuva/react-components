import { useModalContext } from "./hooks/useModalContext";
import "./App.css";

function App() {
  const { showModal } = useModalContext();

  return (
    <>
      <button
        onClick={() => {
          showModal(
            <>
              yoooooooooooooooooooo0000000000000000000000000000000000000000000000000000000000000000000000000000000
              world
            </>,
            "Hello World"
          );
        }}
      >
        show modal
      </button>
    </>
  );
}

export default App;
