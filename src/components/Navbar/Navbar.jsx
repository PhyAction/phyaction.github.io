import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";

function Navbar() {
    return (
        <nav className="navbar-top">
            <div className='inner-nav'>
                <Link to="/" className='branding'>
                    <img src={logo} height={100} width={100} alt=''/>
                    <div className='branding-text'>
                        <h1 className='logo-text'>Phy Action</h1>
                        <h1 className='logo-text'>Physiotherapy</h1>
                    </div>
                </Link>
                <Link to="services/"><h1 className='navlink-text'>Services</h1></Link>
                <Link to="about/"><h1 className='navlink-text'>About Us</h1></Link>
                <Link to="contact/"><h1 className='navlink-text'>Contact Us</h1></Link>
                <div className='dropdown-button'>
                    <FiMenu size={20}/>
                    <div className='dropdown-nav'>
                    <Link to="services/"><h1 className='navlink-text-drop'>Services</h1></Link>
                    <Link to="about/"><h1 className='navlink-text-drop'>About Us</h1></Link>
                    <Link to="contact/"><h1 className='navlink-text-drop'>Contact Us</h1></Link>
                </div>
                </div>
                
            </div>
        </nav>
    );
}

export default Navbar;