import React from "react"
import { Link } from 'react-router-dom';
import { FaHome, FaThList, FaUser, FaEnvelope  } from 'react-icons/fa';
import { IoIosRocket } from "react-icons/io";


class Nav extends React.Component {
    render() {
        return (
            <div id="myNav" className="overlay">
                <ul>
                    <li id="nav-items" className="menuInit"> <Link tag={Link} to="/"><p  className="textMenu">Home</p> <div className="IconBack" ><FaHome className="Icon" /></div></Link></li>
                    <li id="nav-items" className="menuInit"> <Link tag={Link} to="/about"><p  className="textMenu">A propos</p> <div className="IconBack" ><FaUser className="Icon" /></div> </Link></li>
                    <li id="nav-items" className="menuInit"> <Link tag={Link} to="/services"><p  className="textMenu">Work & Services</p><div className="IconBack" ><FaThList className="Icon" /></div></Link></li>
                    <li id="nav-items" className="menuInit"> <Link  tag={Link} to="/projects"><p  className="textMenu">Personnal projects</p><div className="IconBack" ><IoIosRocket className="Icon" /></div> </Link></li>
                    <li id="nav-items" className="menuInit"> <Link tag={Link} to="/contact"><p  className="textMenu">Contact</p><div className="IconBack" ><FaEnvelope className="Icon" /></div> </Link></li>
                </ul>
            </div>
        )
    }
}
export default Nav

