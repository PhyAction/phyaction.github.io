import front_desk from '../../assets/front-desk.jpg';
import './Home.css'
import { Link } from 'react-router-dom';
import front_video from '../../assets/clinicvid.mp4';

function Home() {
    return (
    <>  
        <div className='home-first'>
            <video className='full-size-img' loop autoPlay muted>
                <source src={front_video} type="video/mp4"/>
                Browser cannot play video
            </video>
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