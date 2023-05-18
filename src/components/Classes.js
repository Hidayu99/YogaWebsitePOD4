import React from 'react';
import "./styles.css";
import y14 from '../images/y14.jpg'
import y13 from '../images/y13.jpg'
import y2 from '../images/y2.jpg'
import { useNavigate } from "react-router-dom";

const Classes = () => {
  const navigate = useNavigate();
  return (
    <div>
        <div className='services__area' id='team'>
        <h2 className='text-3xl font-bold'>Let's Explore Our Classes</h2>
        </div>
        <div className='flex flex-wrap justi2fy-center mt-8 gap-10'>
            <div>
            <img className="team__img" src={y14} alt="" />
                    <div><h3 >Yin Yoga</h3>
                    <p>Yin yoga is a slow-paced and meditative form of yoga that focuses on stretching and releasing the connective tissues of the body.</p>
                    </div>
                    <button className="services__btn" onClick={() => navigate("/schedule")}>Book Now</button>
            </div>
            <div>
            <img className="team__img" src={y13} alt="" />
                    <div><h2>Vinyasa Yoga</h2>
                    <p>Yinyasa yoga is a powerful practice that offers both physical and mental benefits..</p>
                    </div>
                    <button className="services__btn" onClick={() => navigate("/schedule")}>Book Now</button>
            </div>
            <div>
            <img className="team__img" src={y2} alt="" />
                    <div><h2>Ashtanga</h2>
                    <p>Ashtanga yoga is known for its physical benefits, including increased strength, flexibility, and endurance.</p>

                    </div>
                    <button className="services__btn" onClick={() => navigate("/schedule")}>Book Now</button>
            </div>
        </div>
    </div>
  );
};

export default Classes;