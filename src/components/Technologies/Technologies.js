import React from 'react';
import {DiAws, DiAndroid, DiAptana, DiCode } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Hire Developers</SectionTitle>
    <SectionText>
    DevsWork is a leading platform for hiring freelance software developers, remote coders and highly skilled consultants. Their rigorous screening process ensures that they only feature top-tier, verified experts who have been thoroughly vetted. They have thousands of freelance software engineers and programmers available for hire on a contract basis, and can assist with short-term or long-term hiring for your company's engineering team.
    </SectionText>
    <List>
      <ListItem>
        <DiAws size="3rem"/>
        <ListContainer> 
          <ListTitle>How to get started with DevsWork?</ListTitle>
          <ListParagraph>
            -Order<br />
            -Check <br/>
            -contract
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiAptana size="3rem"/>
        <ListContainer> 
          <ListTitle> Secure system</ListTitle>
          <ListParagraph>
            -Pay only when you contract <br />
            -Risk-free guarantee
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiCode size="3rem"/>
        <ListContainer> 
          <ListTitle>Your end-to-end remote recruitment solution</ListTitle>
          <ListParagraph>
            -Permanent contracts<br />
            -Contractors
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
