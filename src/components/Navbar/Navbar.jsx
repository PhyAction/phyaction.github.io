import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";

function Navbar() {
    return (
        <nav className="navbar-top">
            <div className='inner-nav'>
                <Link className='branding'>
                    <img src={logo} height={100} width={100} alt=''/>
                    <div className='branding-text'>
                        <h1 className='logo-text'>Phyaction</h1>
                        <h1 className='logo-text'>Physiotherapy</h1>
                    </div>
                </Link>
                <Link><h1 className='navlink-text'>Services</h1></Link>
                <Link><h1 className='navlink-text'>About</h1></Link>
                <Link><h1 className='navlink-text'>Placeholder</h1></Link>
                <Link><h1 className='navlink-text'>Placeholder</h1></Link>
                <div className='dropdown-button'>
                    <FiMenu size={20}/>
                    <div className='dropdown-nav'>
                    <Link><h1 className='navlink-text-drop'>Services</h1></Link>
                    <Link><h1 className='navlink-text-drop'>About</h1></Link>
                    <Link><h1 className='navlink-text-drop'>Placeholder</h1></Link>
                    <Link><h1 className='navlink-text-drop'>Placeholder</h1></Link>
                </div>
                </div>
                
            </div>
        </nav>
    );
}

export default Navbar;