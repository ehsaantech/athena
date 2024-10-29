import { ToastContainer } from "react-toastify";
import AppointmentForm from "./components/AppointmentForm";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./css/fontawesome-all.css";
import "./css/magnific-popup.css";
import "./css/styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AppointmentForm />
      <Footer />
      <Copyright />
      <ToastContainer />
    </div>
  );
}

export default App;
