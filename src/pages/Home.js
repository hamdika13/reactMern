import React,{useState,useEffect} from 'react'; 
import {API_URL} from '../config/config';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Home  () {
    const [data,setData] =useState([]);
   
   useEffect (()=> {
       getUser();
   },[]);
   
   const getUser = async ()=>{
   await  axios
    .get(`${API_URL}/user`)
    .then((response)=>{
        setData(response.data)
        console.log(response.data)
        getUser();

    })
    .catch((err)=>console.log(err));
   };

const deleteUser = (id)=> {
    axios
    .delete(`${API_URL}/user${id}`)
    .then(response=>{
    console.log(response.data)
    getUser();
    })
    .catch((err)=>console.log(err));
}



    return(
        <div className = "row justify-content-center mt-5">
          <div className = "col-md-8">
              <div className = "card">
                <div className = "card-body">
                    <div className = "table-responsive">
                    <table className = "table table-border">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                       {data.map((item,key)=>{
                           <tr key ={key}>
                               <td>{item.username}</td>
                               <td>{item.email}</td>
                               <td>{item.phone}</td>
                               <td>
                                   <Link onClick = {(e) =>deleteUser(item._id)}  className = "btn btn-sm btn-danger">Delete</Link>
                               </td>
                           
                           </tr>
                       })}
                        </tbody>
                    </table>
                    </div>
                </div>
              </div>
          </div>
        </div>
    );
};

export default Home;

