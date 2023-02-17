import React from "react";
import Icon1 from "../../images/teaching.svg";
import Icon2 from "../../images/update.svg";
import Icon3 from "../../images/svg-3.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
  ServicesH2,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="blocchilabs">
      <ServicesH1>BLOCCHI LABS</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>INSTITUTIONS</ServicesH2>
          <ServicesP> Perform academic research in prestigous insitutions to gain a competetive advantage and explore new technologies.  </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>PIONEERING</ServicesH2>
          <ServicesP>BlocchiTech leverages research to develop well designed, reliable, and cutting-edge technologies.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>EFFICIENCY</ServicesH2>
          <ServicesP>Working with top engineers, our technologies surpass expectations due to quality effort.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
