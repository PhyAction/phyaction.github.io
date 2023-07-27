import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = (props) => {
    return (
        <div className='service-card'>
            <h2>{props.serv}</h2>
            <h3>{props.desc}</h3>
            {props.read_more &&
            <Link to={props.more}>
                <button>Read More</button>
            </Link>
            }
        </div>
    );
}

export default ServiceCard