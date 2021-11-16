import React,{FC} from 'react';
import Button from '../Button';

interface Prop {
    title:string,
    pledge?:number,
    daysLeft?:number,
    id?:string,
    noreward:boolean
}

const ModalPagePledge:FC<Prop> =(prop)=>{
    const {title,pledge,daysLeft,id,noreward} = prop
   return(
       <section>
           <div>
               <div>
                   <input type="checkbox" name="" id={id} />
               </div>
               <div>
                   <h3>{title}</h3>
               </div>
               {
                 noreward ? "":(
                        <div>
                        <p>Pledge ${pledge} or more</p>
                        </div>
                 )
               }
               {
                   noreward ?"":(
                        <div>
                        <h6>{daysLeft}</h6>
                        <p>left</p>
                        </div>
                   )
               }
               
           </div>
           <div>
              {prop.children}
           </div>
           <div>
               <p>Enter the pledge</p>
               <input type="text" />
               <Button content={'Continue'} classname={'sm'}/>
           </div>
       </section>
   )
}

export default ModalPagePledge