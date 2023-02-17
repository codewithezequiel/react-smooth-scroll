import React, { useState } from "react";
import Video from "../../videos/videos.mp4";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./heroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video} type="videos/mp4" />
      </HeroBackground>
      <HeroContent>
        <HeroH1>BLOCKCHAIN TECHNOLOGY COMPANY</HeroH1>
        <HeroP>
          BLOCCHITECH - THE WORLD'S FASTEST GROWING BLOCKCHAIN TECHNOLOGY COMPANY
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
