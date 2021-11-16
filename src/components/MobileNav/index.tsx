import React,{FC} from 'react';
import styled from 'styled-components';
import { IconHamburger, Logo } from '../../assets';

const StyledMobileNav = styled.nav`
   background-color:white;
   position:absolute;
   width:calc(100% - 3rem);
   margin:5.5rem 1.5rem;
   display:flex;
   flex-direction:column;
   z-index:1;
   border-radius:1rem;
   box-shadow: 0 0 50vh 150px hsl(0, 0%, 50%, 0.5);
   & li ,& a{ 
       font-size:1.2rem;
       font-weight:500;
       color:black;
       padding:1.4rem .7rem;
  }
  & li:nth-child(1),
  & li:nth-child(2){
    border-bottom:1px solid hsl(0, 0%, 50%, 0.3);
  }
  

`

const MobileNav:FC =() =>{
    return(
         <StyledMobileNav>
             <ul>
                 <li><a href="#">About</a></li>
                
                 <li><a href="#">Discover</a></li>
                
                 <li><a href="#">Get Started</a></li>
             </ul>
         </StyledMobileNav>
    )
}

export default MobileNav