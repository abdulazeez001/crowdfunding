import React,{FC} from 'react';
// import BackProject from '../Modals/backProject';
import NormalPagePledge from '../Pledges/normalPage';

const About:FC =()=>{
   return(
       <section className="about container">
           <div className="white-container">

           <div className="text-content">
               <h2>About this project</h2>
               <p>
                   The Mastercraft Bamboo monitor Riser is a study and stylish platform that elevate
                   your screen to a more comfortable viewing height. Placing your monitor at eye level
                   has the potential to improve your posture and make you comfortable while at work,
                   helping you stay focused on the task at hand.
               </p>
               <p>
                   Featuring artisan craftmanship,the simplicity of design creates extra desk space below
                   your computer to allow notepads,pens,and USB sticks to be stored under the stand.
               </p>
           </div>
           <div>
               <NormalPagePledge title={'Bamboo Stand'} pledge={25} daysLeft={101}>
                    You get an ergonomic stand made of natural bamboo. 
                    You've helped us launch our promotional campaign, and 
                    you’ll be added to a special Backer member list.
                </NormalPagePledge>
                <NormalPagePledge title={'Black Edition Stand'} pledge={75} daysLeft={64}>
                    You get a Black Special Edition computer stand and a personal thank you.
                    You’ll be added to our Backer member list. Shipping is included.
                </NormalPagePledge>
                <NormalPagePledge title={'Mahogany Special Edition'} pledge={200} daysLeft={0}>
                    You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you.
                    You’ll be added to our Backer member list. Shipping is included..
                </NormalPagePledge>
                {/* <BackProject/> */}
           </div>

           </div>
       </section>
   )
}

export default About