import './ServiceCard.css'

const ServiceCard = (props) => {
    return (
        <div className='service-card'>
            <h2>{props.serv}</h2>
            <h3>{props.desc}</h3>
        </div>
    );
}

export default ServiceCard