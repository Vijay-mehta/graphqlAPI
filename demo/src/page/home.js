import React, { useState ,useEffect} from 'react';
// import {useLocation} from 'react-router-dom';
import PetDataContext from '../App'
import { useContext } from 'react';


const Home =()=>{
     const  petData  = useContext(PetDataContext);

     const [data,setData] =useState()
     console.log(data,"datadata")


     useEffect(() => {

      var comment = JSON.parse(localStorage.getItem('formDtata'));
      setData(comment)
  }, []);

  

    // const location = useLocation();

      console.log( petData,"123")

    return(
        
        <>
        <h4>home</h4>
        {data?.map((item)=>{
          console.log(item,"item")
        })}
        {/* <h1>{location.state.formValue.City}</h1>
        <h1>{location.state.formValue.email}</h1>
        <h1>{location.state.formValue.gender}</h1>
        <h1>{location.state.formValue.name}</h1>
        <h1>{location.state.formValue.number}</h1>
        <h1>{location.state.formValue.password}</h1>
        <h1>{location.state.formValue.remember}</h1>
        <h1><img src={location.state.formValue.file}/></h1> */}
        </>
    )
}

export default Home;