import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenidos a<br /> DevsWork
    
      </SectionTitle>
      <SectionText>
      Para desarrolladores web, programadores y desarrolladores graficos que buscan trabajos remotos permanentes o proyectos individuales. Conectamos a desarrolladores de todo el mundo con empresas de tecnología que contratan de forma remota.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Join DevsWork today!</Button>
      <Button onClick={() => window.location = 'https://google.com'}>Sign up now!</Button>
    </LeftSection>
  </Section>
);

export default Hero;