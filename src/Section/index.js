import React from "react";
import { StyledSection, Header, Title, Body } from "./styled"; 

const Section = ({title, body, extraHeaderContent}) => (
    <StyledSection>
        <Header>
            <Title className="section__title">{title}</Title>
            {extraHeaderContent}
        </Header>
        <Body>
            {body}
        </Body>
    </StyledSection>
);

export default Section;