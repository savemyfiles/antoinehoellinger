import React from "react"
import { Link } from 'react-router-dom';
import { FaHome, FaThList, FaUser, FaEnvelope  } from 'react-icons/fa';



class Nav extends React.Component {
    render() {
        return (
            <div id="myNav" className="overlay">
                <ul>
                    <li id="nav-items" className="menuInit"> <Link tag={Link} to="/"><p id="textMenu" className="textMenu">Home</p> <div className="IconBack" ><FaHome className="Icon" /></div></Link></li>
                    <li id="nav-items" className="menuInit"> <Link tag={Link} to="/about"><p id="textMenu" className="textMenu">A propos</p> <div className="IconBack" ><FaUser className="Icon" /></div> </Link></li>
                    <li id="nav-items" className="menuInit"> <Link tag={Link} to="/services"><p id="textMenu" className="textMenu">Services</p><div className="IconBack" ><FaThList className="Icon" /></div></Link></li>
                    <li id="nav-items" className="menuInit"> <Link tag={Link} to="/contact"><p id="textMenu" className="textMenu">Contact</p><div className="IconBack" ><FaEnvelope className="Icon" /></div> </Link></li>
                </ul>
            </div>
        )
    }
}
export default Nav

