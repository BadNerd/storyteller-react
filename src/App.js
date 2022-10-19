import { useEffect,useState } from "react";
import { Route, Routes, useNavigate,useParams} from "react-router-dom";
import StoryTeller from "./StoryTeller";
const App = () => {
  
  //variables
  const defaullURL = "http://localhost:3000/"
  const navigate = useNavigate();
  const data = require('./Data/db.json')['story']
  useEffect (() => {
    
    // if user go to homepage user directed to scene 1 right away
    if (window.location.href === defaullURL){
      navigate('scene/1');
    }
    
    // fetching data
    // const dataFetch = async () => {
    //   try{
    //   const res = await fetch("db.json")
    //   .then(res => res.json())
    //   setData(res)
    //   }catch(err){
    //     console.log(err.response.data)
    //     console.log(err.response.status)
    //     console.log(err.response.headers)
    //   }
    // }
    // dataFetch();
    console.log(data)
  },[navigate])
  
  return (
    <main className="App">
      <Routes>
        <Route path="scene/:scene" element={
        <StoryTeller 
        data={data} 
        />}/>
      </Routes>
    </main>);
};

export default App;
