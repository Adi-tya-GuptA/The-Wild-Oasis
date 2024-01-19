import React from "react";
import styled from "styled-components";
import Row from "../ui/Row";
import Heading from "../ui/Heading";

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  color: var(--color-grey-600);;
`;

const StyledParagraph = styled.p`
  line-height: 1.4;
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

export default function About() {
  return (
    <AboutContainer>
      <Row>
        <Heading as="h1">
          Welcome to Wild Oasis: Your Premier Hotel Booking Experience
        </Heading>
        <StyledParagraph>
          At Wild Oasis, we take pride in delivering an unparalleled hotel
          booking experience that sets us apart as a leader in the industry. As
          your gateway to exceptional accommodations and memorable stays, we are
          dedicated to redefining the way you explore and book hotels.
        </StyledParagraph>
      </Row>
      <Row>
        <Heading as="h2">Our Story:</Heading>
        <StyledParagraph>
          Founded with a passion for travel and a commitment to excellence, Wild
          Oasis emerged as a response to the need for a platform that goes
          beyond mere reservations. Our journey began with the belief that every
          trip deserves the perfect stay, and we've been on a mission to make
          that a reality ever since.
        </StyledParagraph>
      </Row>
      <Row>
        <Heading as="h2">Exceptional Service:</Heading>
        <StyledParagraph>
          At Wild Oasis, we don't just book rooms; we curate experiences. Our
          team of passionate travel enthusiasts is committed to ensuring that
          every stay booked through our platform exceeds your expectations.
          Whether you're planning a relaxing getaway or a business trip, we've
          got you covered with a selection of top-notch hotels.
        </StyledParagraph>
      </Row>
      <Row>
        <Heading as="h2">Customer Satisfaction:</Heading>
        <StyledParagraph>
          Our success is measured by your satisfaction. We take pride in the
          positive feedback we receive from our valued customers who have
          experienced seamless bookings, exceptional service, and unforgettable
          stays. Your happiness is our ultimate reward.
        </StyledParagraph>
      </Row>
      <Row>
        <Heading as="h3">
          Thank you for choosing Wild Oasis for your hotel booking needs. We
          invite you to explore the world with us, one exceptional stay at a
          time.
        </Heading>
      </Row>
    </AboutContainer>
  );
}
