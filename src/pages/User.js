import React,{useState,useEffect} from 'react';
import {API_URL} from '../config/config';
import axios from "axios";


function User() {
    const [data, setData] = useState({});
    const [alert,setAlert] = useState(false);
    const addUser = (e) => {
        e.preventDefault();
        axios
            .post(`${API_URL}/user`, data)
            .then((response) => {
                console.log(response.data);
                setAlert(true);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="row justify-content-center mt-5 " >
            <div className="col-md-6">
                {alert ? (<div className = "alert alert-success">Data Berhasil di Tambahkan</div>
                ) :null}
                <form onSubmit={(e) => addUser(e)}>
                    <div className="card">
                        <div className="card-body">
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" name="Username" className="form-control" required onChange ={(e)=>
                                    setData({...data, username: e.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" name="email" className="form-control" required  onChange ={(e)=>
                                    setData({...data, email: e.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" name="phone" className="form-control" required  onChange ={(e)=>
                                    setData({...data, phone: e.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <textarea name="address" className="form-control"  onChange ={(e)=>
                                    setData({...data, address: e.target.value})}></textarea>
                            </div>
                            <div className="card-footer text-right">
                                <label></label>
                                <button className="btn btn-md btn-primary" type="submit">Submit</button>
                            </div>
                            </div>
                    </div>
               </form>
            </div>

        </div>
    );
};

export default User;


