import './Services.css';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

function Services() {
    return (
        <div className="services">
            <h1>Our Services</h1>
            <hr style={{width: "100%", maxWidth:"1000px"}}/>
            <br/>
            <div className='service-grid'>
                <ServiceCard serv="Physiotherapy" desc="Phyaction Physiotherapy 
                clinic provides services to clients in the community 
                for injuries related to sports, motor vehicle accidents, 
                WSIB acute and chronic medical/post-surgical conditions. 
                Physiotherapy involves recovery via patient education, 
                goal setting, exercises, and home programs."/>
                <ServiceCard serv="Massage Therapy" desc="Massage therapy is a 
                gentle hands-on approach that can help relieve pain, 
                alleviate stress and reduce muscle tension. Massage therapy 
                can be used to treat many conditions such as: muscle strain, 
                headaches, insomnia, stress, carpal tunel syndrome, scars, 
                whiplash, and nerve related conditions."/>
                <ServiceCard serv="Chiropractic" desc="Chiropractors 
                will examine a patient and determine a treatment plan 
                which may include spinal adjustments to treat symptoms 
                such as back pain, neck pain, and headaches."/>
                <ServiceCard serv="Orthotics" desc="Custom foot orthotics can 
                alleviate pain arising from plantarfasciitis, heel spur, 
                patellar femoral syndrome, achilles tendinitis, bunions, 
                metatarsalgia, anterior tibialis shin splints, and 
                abnormal gait. Patients often experience immediate relief and 
                can expect complete recovery within 3-6 months."/>
                <ServiceCard serv="Reflexology" desc="Reflexology involves the 
                application of pressure to specific points on the feet, ears, 
                and hands to relieve pain, alleviate stress and reduce muscle 
                tension." />
                <ServiceCard serv="Acupuncture" desc="Acupuncture involves the 
                practice of penetrating the skin with thin needles to stimulate 
                the central nervous system and can aid in treating Nausea, headaches, 
                Osteoarthritis and other conditions." />
                <ServiceCard serv="Occupational Therapy" desc="Occupational 
                therapy helps people of all ages who have physical, sensory, or 
                cognitive problems and can treat a variety of conditions 
                including sensory processing disorders, mental health related 
                illnesses, and traumatic injuries to the brain or spinal cord." />
            </div>
            <div style={{marginTop: "20px"}}>
                <h2>Service fees Covered By</h2>
                <ul>
                    <li>Extended health care plans</li>
                    <li>WSIB</li>
                    <li>Car Accident Insurance (MVA)</li>
                    <li>Visa, Mastercard, Amex, Interac</li>
                </ul>
            </div>
        </div>
    );
}

export default Services;