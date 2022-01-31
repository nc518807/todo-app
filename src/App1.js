import React, { useState } from 'react';
import Blogcard from './Blogcard';
const Obj = [
  {

  title:'lorem ipsum',
  description:'how are you ?'
},
{
  title:'lorem ipsum lorem ipsum',
  description:'great environment'
}
];

//let Count = 1;
////const App = ()=>{
  ////const state = useState();
  //const [Count,setCount]= useState(0);
//const IncNum = ()=>{
  
   //setCount(Count+1);
 // console.log('clicked');

//}
//  return(
//<>
//    <h1>{Count}</h1>
//    <button onClick={IncNum}>clickme</button>
////    </>
////  );
//
////};
//let newTime = new Date().toTimeString();
//const App = ()=>{
//  const[cTime,setCtime]= useState(newTime);
//const Ltime = ()=>{
//  let newCTime = new Date().toTimeString();
//  setCtime(newTime);
//}
//
//  return(
//    <>
//    <h1>{cTime}</h1>
//    <button onClick={Ltime}>Get the time</button>
//    
//    </>
//  );
////};
//let newTime = new Date().toTimeString();
//const App = ()=>{
//  
//  <Blogcard />
//  const[setcTime,uTime]=useState(newTime);
//  const updateTime = ()=>{
//    let time =new Date().toTimeString();
//    uTime(time);
//  };
//  setInterval(updateTime,1000);
//  return(
//    <>
//    <h1>{setcTime}</h1>
//    </>
//  );
//};
const App = ( (obj,pos)=>{
  return(
    
    <>
    <Blogcard/>
    <h1>{obj.title}</h1>
    </>
  );
});
export default App1;