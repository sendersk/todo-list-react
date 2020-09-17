import React from "react";
import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";


export default () => (
  <Container>
    <Header title="O autorze" />
    <Section 
        title="Przemysław Senderski" 
        body={<>Hej, tu Przemek. Jestem autorem tego projektu. </>} 
    />
  </Container>
);
