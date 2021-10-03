import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.scss";

const Home = () => {
    return (
        <div>
           Home Page!
           <Link to="/login">
               <button>Login!</button>
            </Link> 
            <Link to="/signup">
               <button>SignUp!</button>
            </Link> 
        </div>
    )
}

export default Home
