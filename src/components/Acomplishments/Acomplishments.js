import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 12, text: 'Open Source Projects'},
  { number: 100, text: 'Projects Created', },
  { number: 15, text: 'Technologies Experienced', },
  { number: 5, text: 'Years Experience', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishment</SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
