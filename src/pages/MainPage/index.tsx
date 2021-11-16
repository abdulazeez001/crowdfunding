import React,{FC} from 'react';
import About from '../../components/About/about';
import HeadLine from '../../components/HeadLine/headline';
import Progress from '../../components/Progress';

const MainPageContent:FC =()=>{
   return(
       <section>
           <HeadLine/>
           <div className="page-body">
            <Progress amountBacked={89000} numOfBackers={1000}/>
            <About/>
           </div>
       </section>
   )
}

export default MainPageContent