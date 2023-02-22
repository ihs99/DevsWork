import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {[{
          title: 'Project 1',
          description: 'aqui irian las preguntas frecuentes, como funciona, quieres saber mas, etccccc....'
        },{
          title: 'Project 2',
          description: 'aqui irian las preguntas frecuentes, como funciona, quieres saber mas, etccccc....'
        },{
          title: 'Project 3',
          description: 'aqui irian las preguntas frecuentes, como funciona, quieres saber mas, etccccc....'
        },{
          title: 'Project 4',
          description: 'aqui irian las preguntas frecuentes, como funciona, quieres saber mas, etccccc....'
        }].map((projects) => (
          <div>
            {projects.title}
            <br></br>
            {projects.description}
          </div>
        ))}
      </GridContainer>
  </Section>
);

export default Projects;