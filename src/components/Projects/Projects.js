import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
    <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Find a Developer Job</SectionTitle>
      <GridContainer>        
        {projects.map(({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}> 
            <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title} </HeaderThree>
                <Hr />
              </TitleContent>
            <CardInfo >{description}</CardInfo> 
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}> {tag}</Tag> //aqui van las etiquetas de tus aptituted como mongo, react, SQL 
                ))}
              </TagList>
            </div>
            <UtilityList> 
              
              <ExternalLinks href={source}>put filter</ExternalLinks>

            </UtilityList>
          </BlogCard>
        ))} 
      </GridContainer>
    </Section>// arriba donde pone code es donde aparece para pinchar en las tarjetas siendo asi un tipo de modo
);

export default Projects;