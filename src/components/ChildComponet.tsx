"use client"
// import * as jwt_decode from 'jwt-decode';
import  {   useEffect, useState } from "react";

import useCounterStore from './../store';
// import { useZustand } from "use-zustand";
// import { useZustand } from 'use-zustand';

interface ListProps{
    ls:string;  
}
 


export default function ChildComponent({ls}:ListProps) { 
  // const [counter, setCounter] = useState(0);
  const {count,increase,decrease}=useCounterStore.getState();
  // const [count,setCount] = useState(useCounterStore.getState().count);
  const [, setRender] = useState({});
  
  // useEffect(() => {
  //   const unsubscribe = useCounterStore.subscribe((state) => setCount(state.count));
  //   return () => unsubscribe();
  // }, []);
  useEffect(() => {const unsubscribe = useCounterStore.subscribe(() => setRender({}))
   return () => unsubscribe();}, []);

  // const count = useZustand(useCounterStore, selectCount);
  // const { count } = useCounter();
  // const handleClick = useCallback(() => {
  //   // setCounter(prev=>prev+1);
  //   increase();
  // }, []);

  // usecal
  // const count=0;
  // const count =  useZustand(useCounterStore,(state) => {
  //   // console.log(state);
  //   return state.count
  // });
  // const increase = useZustand(useCounterStore,(state) => state.increase);
  // const decrease = useZustand(useCounterStore,(state) => state.decrease);
  // const elRef = useRef("");
  // const count =  useCounterStore((state) => state.count);
  // const increase = useCounterStore((state) => state.increase);
  // const decrease = useCounterStore((state) => state.decrease);
  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   // document.title = `You clicked ${counter} times`;
  //   // console.log(count);
  //   useCounterStore.subscribe(state=>{
  //     // console.log(count);
  //     // count=state.count;
  //     elRef.current = `${state.count}`;
  //   })
  // },[]);
  // const clickme=async ()=>{
    // console.log(count);
    // count=20;
    // useCounterStore.getState().increase();
    // console.log(useCounterStore.getState().count);

    // const _body=new FormData();
    // _body.append("email","anasjelloule@gmail.com");
//     // _body.append("password","1234");
//     const eventData={
//       email:"anasjelloule@gmail.com",
//       "password":"Magana89"
//     }
// await fetch('http://localhost:5000/api/v1/auth/login',{method: 'POST',
//         headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(eventData),
// }).then((response)=>{
//   console.log(response)  
//   })

// const token=localStorage.getItem("ID_TOKEN") ?? "";
// console.log(jwt_decode.jwtDecode(token));
  // }
  return (
           <div style={{display:"flex",gap:"10px",marginTop:"20px",marginBottom:"20px",alignItems:"center"}}>
    {/* <div>  */}
using zustand -
           <h1 >Count: {count} </h1>
      <button onClick={increase} className="btn">Increase</button>
      <button onClick={decrease}  className="btn">Decrease</button>

           {/* </div> */}
 
      <br/>
       
      {/* <button onClick={() => setCounter(counter + 1)}>
        Click me
      </button>
      <button onClick={clickme}>
      {ls}
      </button> */}
      {/* <button onClick={async ()=>{
            const equipe=localStorage.getItem("equipe")
            console.log(equipe);
      }}>
      load Equipe
      </button> */}
      </div>
  )
}

// export default MyReactComponent