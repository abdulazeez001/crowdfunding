import React,{FC} from 'react';
import Button from '../Button';

interface Prop {
    title:string,
    pledge:number,
    daysLeft:number,
}

const NormalPagePledge:FC<Prop> =(prop)=>{
    const {title,pledge,daysLeft} = prop
   return(
       <section className="container">
           <div className="pledge white-container">

                <div>
                    <div>
                        <h2>{title}</h2>
                    </div>
                    <div>
                        <p>Pledge ${pledge} or more</p>
                    </div>
                </div>
                <div>
                    <p>
                    {prop.children}
                    </p>
                </div>
                <div>
                    <div>
                        <h6>{daysLeft}</h6>
                        <p>left</p>
                    </div>
                    <Button content={'Select Reward'} classname={'md'}/>
                </div>

           </div>
       </section>
   )
}

export default NormalPagePledge