import { ToastContainer } from "react-toastify";
import Body from "./Components/Body";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Header from "./Components/Navbar";

function App() {
  return (
    <>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
