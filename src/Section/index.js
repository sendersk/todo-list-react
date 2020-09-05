import React from "react";
import { Wrapper, Header, Title, Body } from "./styled"; 

const Section = ({title, body, extraHeaderContent}) => (
    <Wrapper>
        <Header>
            <Title className="section__title">{title}</Title>
            {extraHeaderContent}
        </Header>
        <Body>
            {body}
        </Body>
    </Wrapper>
);

export default Section;