import front_desk from '../../assets/front-desk.jpg';
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
    <>  
        <div className='home-first'>
            <img src={front_desk} alt='' className='full-size-img'/>
            <div className='front-desk-text'>
                <h1>Phy Action Physiotherapy</h1>
                <h2>Prompt, high-quality, and effective care for all our clients</h2>
                <Link to='/contact/'><h2>Call now to book an appointment</h2></Link>
            </div>
        </div>
        
    </>
    );
}

export default Home