import {Link} from "react-router-dom";

const NavigationBar = (props) => {
    return (
        <>
        <nav className="nav-body bg-dark container-fluid p-3">
            <h1 className="text-light">Spotify</h1>
            <ul className="navMenu">
                <li>Premium</li>
                <li>Support</li>
                <li>Download</li>
                <li>|</li>
                <li>Sign Up</li>
                <li>Login</li>


            </ul>
        </nav>


        <img src={props.img} className="w-100" alt="" />
  
        </>
      );
}

export default NavigationBar;