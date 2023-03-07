import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20000, text: 'Different developers'},
  { number: 9000, text: 'recruited', },
  { number: 1900, text: 'independent professionals', },
  { number: 1000, text: 'satisfied companies', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle> Who are we? </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
