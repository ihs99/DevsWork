import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:111-111-111'>111-111-111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='inigo.huidobro@DevsWork.com'>inigo.huidobro@DevsWork.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>© Copyright 2023 DevsWork</Slogan>
        </CompanyContainer>  
        <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://Linkedin.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://instagram.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
