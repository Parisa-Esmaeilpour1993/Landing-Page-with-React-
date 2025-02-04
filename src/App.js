import { ToastContainer } from "react-toastify";
import "./App.css";
import LandingPage from "./pages/home/Landing-Page";

const App = () => {
  return (
    <>
      <LandingPage />
      <ToastContainer />
    </>
  );
};

export default App;
