import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider/>
   <br />
<SectionTitle>Technologies</SectionTitle>
<SectionText>
  about work 
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto soluta molestias minus aut asperiores ipsa laboriosam sunt. Quod asperiores impedit 
</SectionText>
<List>
  <ListItem>
    <DiReact size="3rem" />
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Exprience With <br />
        React.js
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiFirebase size="3rem" />
    <ListContainer>
      <ListTitle>Back-End</ListTitle>
      <ListParagraph>
        Exprience With <br />
        Node and Databases
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiZend size="3rem" />
    <ListContainer>
      <ListTitle>UI/UX</ListTitle>
      <ListParagraph>
        Exprience With <br />
        tools like figma
      </ListParagraph>
    </ListContainer>
  </ListItem>
</List>
</Section>
);

export default Technologies;
