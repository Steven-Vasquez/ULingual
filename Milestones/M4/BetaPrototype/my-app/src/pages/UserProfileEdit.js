import React, {useState, useEffect} from "react";
import './stylesheets/UserProfileEdit.css'
import { Link } from "react-router-dom";
import axios from "axios";

const UserProfileEdit = () => {
    const [description, setDescription] = useState("");
    
    useEffect(() => {
        axios.post(`https://50.18.108.83.nip.io:3001/user/info`)
        //axios.post(`http://localhost:3001/user/info`)
        .then(res => {
            setDescription(res.data.Description);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    const submitProfile = (e) => {
        e.preventDefault();
        axios.post("https://50.18.108.83.nip.io:3001/profile", {
        //axios.post("http://localhost:3001/profile", {
            Description: description
        })
        .then(res => {
            console.log(res);
            alert("Your profile has been updated!")
            window.location.href = '/UserProfile';
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    return(
    <div className="user-entire">
            <div className='UserProfile'>
                <div className="User-Info">
                    <img className="ProfileImage" src ={"https://placehold.jp/150x150.png"}/>
                    <h4>Edit Photo</h4>
                </div>
                        
                <div className="descriptionContainer">
                    <input type="text" value={description} placeholder="Enter New Description" className="editDescription"
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                    />
                </div>
                            
                <div className="user-status">
                    <h4>Change Status</h4> 
                    <div className="online">
                        <h3>Online</h3>
                    </div>
                    <div className="offline">
                        <h3>Offline</h3>
                    </div>
                    <div className="dnd">
                        <h3>Do Not Disturb</h3>
                    </div>
                </div>

                <div className="langSelectionBox">
                    <h2>Select Languages</h2>
                    <div className="innerLangSelection">
                        <ul>
                            <li>English <input type={"checkbox"}/></li>
                            <li>Korean <input type={"checkbox"}/></li>
                            <li>Spanish <input type={"checkbox"}/></li>
                            <li>French <input type={"checkbox"}/></li>
                            <li>Arabic <input type={"checkbox"}/></li>
                        </ul>
                    </div>
                </div>

                <div className="button">
                    <button to="/UserProfile" onClick={(e) => submitProfile(e)} className="greenbox">
                        Done
                    </button>
                </div>
            </div>   
    </div>
    );
}

export default UserProfileEdit;