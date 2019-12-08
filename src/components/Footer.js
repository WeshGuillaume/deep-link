import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: flex;
  flex-direction: column;
  padding: 32px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Button = styled.div`
  border-radius: 5px;
  background-color: #703deb;
  padding: 16px 32px;
  display: flex;
  justify-content: center;

  span {
    color: white;
    text-align: center;
    font-family: Muli;
    font-weight: bold;
    font-size: 18px;
  }
`;

const Separator = styled.p`
  text-align: center;
  font-family: Muli;
  font-weight: bold;
  font-size: 18px;
  margin: 16px 0;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  max-width: 70%;
  justify-self: center;
  align-self: center;
`;

export default function Footer({ onAdd }) {
  return (
    <Container>
      <Button onClick={onAdd}>
        <span>Add to SnapCard</span>
      </Button>
      <Separator>or</Separator>
      <Link href="https://play.google.com/store/apps/details?id=com.guillaumebadi.snapcard&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
        <Img
          alt="Get it on Google Play"
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        />
      </Link>
    </Container>
  );
}
