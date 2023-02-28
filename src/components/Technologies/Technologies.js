import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Hire Developers</SectionTitle>
    <SectionText>
    DevsWork es una plataforma líder en la contratación de desarrolladores de software independientes, codificadores remotos y consultores de ingeniería altamente cualificados. Nuestro riguroso proceso de selección garantiza que sólo le presentamos expertos verificados de primer nivel que han superado nuestra exhaustiva investigación, equiparable a los estándares de calidad del reconocido mercado tecnológico del Silicon Valley. Contamos con una amplia red de miles de ingenieros de software y programadores independientes disponibles para ser contratados por contrato. Ya sea que necesite contratar personal a corto plazo o desee expandir el equipo de ingeniería de su empresa, nuestro diverso grupo de desarrolladores independientes globales y remotos seguramente cumplirá con sus requisitos.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer> 
          <ListTitle> fRONT-END</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer> 
          <ListTitle> fRONT-END</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js y mongodb y Mysql
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size="3rem"/>
        <ListContainer> 
          <ListTitle> UI</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java, C#, JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
