
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import bgVideo from './assets/video/Abstract - 19725.mp4';
import { useEffect, useState } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  const [loading, setLoading] = useState(true);

  // Fake Loading
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }, []);


  if (loading) {
    return <div className='min-h-screen flex justify-center items-center'>
      <PropagateLoader
        color='#36d7b7'
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader" />
    </div>
  }


  return (
    <div>
      <video src={bgVideo} autoPlay loop muted className='fixed min-h-screen w-full object-cover'></video>
      <div className='min-h-screen absolute w-full h-full top-0 left-0'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
