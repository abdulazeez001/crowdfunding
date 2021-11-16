import React,{FC} from 'react';
import Modal from '.';
import ModalPagePledge from '../Pledges/modalPagePledge';

const BackProject:FC =()=>{
   return(
       <Modal>
           <div className="back-project container">
               <div className="white-container">

                    <div>
                        <h2>Back this project</h2>
                    </div>
                    <div>
                        <p>
                            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                        </p>
                    </div>
                    <div>
                        <ModalPagePledge title={'Pledge with no reward'} noreward={true}>
                        Choose to support us without a reward if you simply believe in our project. 
                        As a backer, you will be signed up to receive product updates via email.
                        </ModalPagePledge>
                        <ModalPagePledge title={'Bamboo Stand'} pledge={25} daysLeft={101} noreward={false}>
                                You get an ergonomic stand made of natural bamboo. 
                                You've helped us launch our promotional campaign, and 
                                you’ll be added to a special Backer member list.
                            </ModalPagePledge>
                            <ModalPagePledge title={'Black Edition Stand'} pledge={75} daysLeft={64} noreward={false}>
                                You get a Black Special Edition computer stand and a personal thank you.
                                You’ll be added to our Backer member list. Shipping is included.
                            </ModalPagePledge >
                            <ModalPagePledge  title={'Mahogany Special Edition'} pledge={200} daysLeft={0} noreward={false}>
                                You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you.
                                You’ll be added to our Backer member list. Shipping is included..
                            </ModalPagePledge >
                    </div>

               </div>
           </div>
       </Modal>
   )
}

export default BackProject