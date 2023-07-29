import './Contact.css';
import maps from '../../assets/maps.JPG';

function Contact() {
    return (
        <div className='outer-contact'>
            <div className='inner-contact'>
                <h1>Location</h1>
                <img className='full-map' src={maps}></img>
                <br/>
                <h2>33 Howard Street</h2>
                <h2>Toronto, Ontario</h2>
                <h2>M4X 1J6</h2>
                <br/>
                <hr/>
                <h1>Phone: (416) 968-1864</h1>
                <h1>Fax: (416) 968-6494</h1>
                <hr/>
                <h1>Business Hours: </h1>
                <h2>Monday - Friday: 9am-7pm by appointment only</h2>
                <h2>Saturday: By appointment only</h2>
                <h2>Sunday: Closed</h2>
            </div>
        </div>
    );
}

export default Contact