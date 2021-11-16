import React,{FC} from 'react';
import Modal from '.';
import { IconCheck } from '../../assets';
import Button from '../Button';


const ThanksPledge:FC =()=>{

   return(
           <Modal>
               <div>
                   <img src={IconCheck} alt="" />
               </div>
               <div>
                   <h1>Thanks for your support!</h1>
                   <p>
                       Your pledge brings us one step closer to sharing Mastercraft
                       Bamboo Monitor Riser worldwide. You will get an  email once our campaign is completed.
                   </p>
               </div>
              <Button content={'Got it!'} classname={'sm'} />
           </Modal>       
   )
}

export default ThanksPledge