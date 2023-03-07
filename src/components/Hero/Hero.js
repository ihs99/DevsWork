import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Welcome to <br /> DevsWork
    
      </SectionTitle>
      <SectionText>
      For web developers, programmers and graphic developers looking for permanent remote jobs or individual projects. We connect developers from all over the world with technology companies hiring remotely.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Join DevsWork today!</Button>
      <Button onClick={() => window.location = 'https://google.com'}>Sign up now!</Button>
    </LeftSection>
  </Section>
);

export default Hero;