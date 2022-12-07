import AppRoute from "./route/AppRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <AppRoute />
      <ToastContainer />
    </>
  )
}

export default App
