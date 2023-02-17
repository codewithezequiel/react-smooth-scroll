import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterLinksWrapper,
  FooterLink,
  FooterLinkItems,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> ABOUT US</FooterLinkTitle>
              <FooterLink to="">INVESTORS</FooterLink>
              <FooterLink to="">CAREERS</FooterLink>
              <FooterLink to="">TERMS OF SERVICE</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> SOCIAL MEDIA</FooterLinkTitle>
              <FooterLink to="">FACEBOOK</FooterLink>
              <FooterLink to="">CAREERS</FooterLink>
              <FooterLink to="">TERMS OF SERVICE</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> SOCIAL MEDIA</FooterLinkTitle>
              <FooterLink to="">FACEBOOK</FooterLink>
              <FooterLink to="">CAREERS</FooterLink>
              <FooterLink to="">TERMS OF SERVICE</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">BLOCCHITECH </SocialLogo>
            <WebsiteRights>
              BLOCCHITECH © {new Date().getFullYear() + " "}
              All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
