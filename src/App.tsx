import { Outlet } from "react-router";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
function App() {
 

  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      <ToastContainer/>
    </div>
  );
}

export default App;
