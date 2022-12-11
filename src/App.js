
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import bgVideo from './assets/video/Abstract - 19725.mp4';
import { useEffect, useState } from 'react';
import FadeLoader from "react-spinners/FadeLoader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import whatsapp from './assets/img/whatsapp.png';


function App() {
  const [loading, setLoading] = useState(true);

  // Init AOS 
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])


  // Fake Loading
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, []);


  return (
    <div>
      <video src={bgVideo} autoPlay loop muted className='fixed min-h-screen w-full object-cover'></video>
      {
        loading ? <div className='min-h-screen flex justify-center items-center'>
          <FadeLoader
            color='rgb(34 211 238)'
            loading={loading}
            size={70}
            aria-label="Loading Spinner"
            data-testid="loader" />
        </div> : <div className='min-h-screen absolute w-full h-full top-0 left-0'>
          <a href='https://wa.me/8801829218489' target="_blank" rel="noreferrer" className='fixed right-20 bottom-20 z-40 text-5xl text-green-400'>
            <img className='w-16 h-16 rounded-full' src={whatsapp} alt="" />
          </a>
          <RouterProvider router={router}></RouterProvider>
        </div>
      }
      <ToastContainer position='top-center' />
    </div>
  );
}

export default App;
