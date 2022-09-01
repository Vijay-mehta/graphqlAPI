import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
 import About from './page/about'
 import Home from './page/home'
//  import Category from './page/category'
 import Contact from './page/contact'
 import Header from './component/header'
 import Footer from "./component/footer";
 import './App.css'
import Signup from "./component/signup";
import { createContext } from "react";


function App() {
  
  const PetDataContext = createContext();


  var comment = JSON.parse(localStorage.getItem('newData'));
   console.log(comment,"data")

  return (
    <PetDataContext.Provider value={comment}>

   <div className="container">
   <Router>
   <Header/>
    <Routes>
  
    <Route path="/" element={<About/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    {/* <Route path="/category" element={<Category/>}></Route> */}
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>

   
    </Routes>
    <Footer/>
   </Router>

  
   </div>
   </PetDataContext.Provider>
  );
}

export default App;
