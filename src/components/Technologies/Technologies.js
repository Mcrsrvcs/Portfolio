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
We use Modren UI technologies and most popular frontend library REACTjs with Tailwindcss and Material UI to make websites and webapps beautiful. 
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
      <ListTitle>APIs</ListTitle>
      <ListParagraph>
        Exprience With <br />
        Node and Express
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
