import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/Routes';
import { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";



function App() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);

    }, 8000)
  },[])


  return (
    <>
    {
      loading ? <div className="spanner"><HashLoader  color="#005be6" /> <h1>welcome To Easy Learner</h1></div>
      : <div >
      <RouterProvider  router={router}></RouterProvider>
      <Toaster />  
      </div>
    }
    </>
   
  );
}

export default App;
