"use client"
import 'tailwindcss/tailwind.css'
import ChildComponent from "./ChildComponet";
import { useEffect } from 'react';
import Keycloak from 'keycloak-js';
// import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import About from '../pages/about';


interface ListProps{
    ls:string;  
}
 
const kc =new Keycloak({
  
    url: 'http://localhost:8086',
    realm: 'MICROSERVICE',
    clientId: 'ANGULAR',
});

kc.init({
  // onLoad: 'check-sso',
  checkLoginIframe: false,
  enableLogging: true,
})
.then((authenticated) => {
  if (authenticated) {
      console.log('User is authenticated');
  } else {
      console.log('User is not authenticated');
  }
});

export default function MyReactComponent({ls}:ListProps) { 
  console.log(ls);
  

  useEffect(() => {
    // Exposing the React function globally
    window.reactFunction = (data) => {
      console.log('React Function called from Angular with data:', data);
    };

    // Cleanup to remove the function when the component unmounts
    return () => {
      delete window.reactFunction;
    };
  }, []);

  const callAngular = () => {
    if (window.callAngularFunction) {
   const _data =   window.callAngularFunction({ message: 'Hello from React' });
   console.log(_data);
    } else {
      console.error('Angular function is not defined.');
    }
    // return "data exemple";
  };

  const login=async ()=>{
    await fetch('http://localhost:3000/login', {
      method: 'POST',
      credentials: 'include' // Ensures cookies are sent
    });
  }

  const callProtectedApi=async ()=> {
    await fetch('http://localhost:3000/protected-route', {
      method: 'GET',
      credentials: 'include' // Ensures cookies are sent
    });
    // return this.http.get('http://localhost:3000/protected-route', { withCredentials: true }).subscribe();
  }

  const logwindow=()=>{
    console.log(window.keycloakInstance);
  }
  const secure=()=>{
    // if(window.keycloakInstance)
    fetch(`http://localhost:3000/permissions`,{
      method: 'GET',
      credentials: 'include' ,
      headers: {
        Authorization: `Bearer ${window.keycloakInstance.token}`
      }
    }).then(console.log)
  }
  return <div className="text-3xl font-bold">
  <h1>This is From React</h1>
  {/* <Link to="/about">About</Link> */}
  <div className="flex items-center justify-between">
  <button onClick={secure} className="btn">callProtectedApi </button>
  <button onClick={callAngular} className="btn">Call Angular Function</button>
  {/* <button onClick={login} className="btn">login React</button> */}
  {/* <button onClick={callProtectedApi}>callProtectedApi React</button> */}
  <button onClick={logwindow} className="btn">Log Window</button>
  </div>
  <ChildComponent ls="ANAS" />
  
  {/* <BrowserRouter>
    <Routes>
      <Route path="/about" element={<About />}>
        <Route index element={<MyReactComponent ls='ANAS' />} />
        <Route path="about" element={<About />} /> 
      </Route>
    </Routes>
  </BrowserRouter> */}

  {/* <Outlet /> */}
  </div>
  // return <>ANAS</>
}

// export default MyReactComponent