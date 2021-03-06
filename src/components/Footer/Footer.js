import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call </LinkTitle>
      <LinkItem href="tel:7814798275">7814798275</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>email </LinkTitle>
      <LinkItem href="mailto:hellomain@gmailcom">hellomail@gmailcom</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialIcons>
      <SocialIcons href="https://github.com">
       <AiFillGithub size="3rem"/>
     </SocialIcons>
     <SocialIcons href="https://linkedin.com">
       <AiFillLinkedin size="3rem"/>
     </SocialIcons>
     <SocialIcons href="https://instagram.com">
       <AiFillInstagram size="3rem"/>
     </SocialIcons>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
