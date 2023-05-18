import React from 'react';
import "./styles.css";
import karina from '../images/karina.jpg'
import simon from '../images/simon.jpg'
import midah from '../images/midah.jpg'

const Coaches = () => {
  return (
      <div>
        <div className='services__area' id='team'>
    
          <h2 className='text-3xl font-bold'>Meet Our Trainer</h2>
        </div>
        <div className='flex flex-wrap justify-center mt-8 gap-10'>
            <div>
            <img className="team__img" src={karina} alt="" />
                    <div><h3 >Karina Ayn Mirsky</h3>
                    <p>Senior Instructor</p>
                    <p>+9233636655 </p>
                    <p>karinaaynmirsky@gmail.com</p>
                    </div>
            </div>
            <div>
            <img className="team__img" src={simon} alt="" />
                    <div><h2>Simon Park</h2>
                    <p >Senior Instructor</p>
                    <p>+998877333</p>
                    <p>simonpark@gmail.com</p>
                    </div>
            </div>
            <div>
            <img className="team__img" src={midah} alt="" />
                    <div><h2>Midah Arshad</h2>
                    <p>Senior Instructor</p>
                    <p>9233636655</p>
                    <p>midah.arshad@gmail.com</p>
                    </div>
            </div>
        </div>
    </div>
  );
};

export default Coaches;