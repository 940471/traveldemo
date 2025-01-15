
import Link from 'next/link';

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from 'next/image';


import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';
export default function MainHeader(){

  
    return(
    <>
    <MainHeaderBackground/>
    <header className={classes.header}>


        <Link className={classes.logo} href ="/">
          <Image src ={logoImg}  alt ='Explore the World!' priority/>
          Travel Planner
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink href ="/travel"> Explore Places</NavLink>

                </li>
                <li>
                
                <NavLink href ="/community"> Travelers commnunity </NavLink>
                    
                </li>
            </ul>
        </nav>
    </header>
    </>)
}