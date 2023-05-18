import React from 'react';
import monique from '../images/monique.jpg'

const About = () => {
  return (
    <div className='mt-24 flex flex-wrap justify-center gap-14' id='our'>

        <img src={monique} className='h-[520px] w-[380px]' alt='' />

        <div className='h-[250px] w-[650px] flex flex-wrap'>
            <h2 className='text-4xl font-bold pl-5'>Our CEO...</h2> 
           
            <p className='pt-4 pl-5'></p>

            <div className='h-[400px] w-[650px] flex flex-wrap'>
            
            <p className='pt-4 pl-5'>Welcome to our yoga class website. We are proud to introduce our CEO, Monique Schubert, who has been a leading force in the yoga industry for over 20 years.</p>
            <p className='pt-4 pl-5'></p>

           <div className='h-[400px] w-[650px] flex flex-wrap'>
            
            <p className='pt-4 pl-5'>She is a beautiful soul who sees life as an extended project to make the world more beautiful, more kind, and more inclusive. She uses the tools of art, yoga, and music to educate, inspire, and connect.</p>
            <p className='pt-4 pl-5'></p>
            </div>
           </div>
      </div>
            
    </div>
  );
};

export default About;