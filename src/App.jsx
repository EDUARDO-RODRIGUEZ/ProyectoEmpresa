import AppRoute from "./route/AppRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"c05646f4795b36617de8441fadcb14","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
  },[])
  return (
    <>
      <AppRoute />
      <ToastContainer />
    </>
  )
}

export default App
