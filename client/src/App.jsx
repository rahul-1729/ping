import React,{lazy} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
 
// to avoid loading of pages in bundle and only required pages will be loaded
const Home = lazy(   ()=>import("./pages/Home"));
const Login = lazy(   ()=>import("./pages/Login"))
const Chat = lazy(   ()=>import("./pages/Chat"))
const Groups = lazy(   ()=>import("./pages/Group"))

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/chat/:chatId" element ={<Chat/>}/>
        <Route path="/groups" element ={<Groups/>}/>
        <Route path="/login" element ={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App