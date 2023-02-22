import Link from 'next/link'; //vinculamos diferentes paginas o secciones a nuestra propia pagina
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'; //esto es el paquete de iconos de react
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles'; //componentes con estilo 

const Header = () =>  ( // 4 lineas mas abajo creamos un componente de estilo
  <Container> 
    <Div1> 
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20;'}}> 
          <DiCssdeck size="3rem" /> <span>DevsWork </span> 
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects"> 
        <NavLink>Find remote Jobs</NavLink>
        </Link>
      </li>

      <li> 
        <Link href="#Tech"> 
        <NavLink>Hire Developers</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about"> 
        <NavLink>What is</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://Linkedin.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://facebook.com">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
