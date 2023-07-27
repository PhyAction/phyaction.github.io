import './Services.css';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

function Services() {
    return (
        <div className="services">
            <h1>Our Services</h1>
            <hr style={{width: "100%", maxWidth:"1000px"}}/>
            <br/>
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
                application of pressure to specific points on the body 
                to relieve pain, alleviate stress and reduce muscle 
                tension." />
                <ServiceCard serv="Acupuncture" desc="Acupuncture involves 
                stimulating the central nervous system and can aid in treating 
                nausea, headaches, osteoarthritis and other conditions." />
                <ServiceCard serv="Occupational Therapy" desc="Phyaction 
                Physiotherapy's Occupational Therapy (OT) program specializes 
                in empowering children and adolescents to develop skills to 
                manage their activities of daily living, and their feelings and 
                behaviours both at home, school, and during playtime. Whether 
                it's mastering specific skills, navigating social or academic 
                challenges, or coping with the demands of everyday life, 
                our dedicated Occupational Therapy team is here to guide your 
                children through these obstacles, fostering growth and nurturing
                 self-confidence." read_more more="/services/ot/"/>
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