import React from "react";
import { useCabin } from "./useCabin";
import ButtonText from "../../ui/ButtonText";
import { useMoveBack } from "../../hooks/useMoveBack";
import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Button from "../../ui/Button";
import AddBooking from "../bookings/AddBooking";
// import { styled } from "@tanstack/react-query-devtools/build/lib/utils";
const PageContainer = styled.div`
  display: flex;
  /* flex-direction: ; */
  align-items: center;
  padding: 20px;
  gap: 10rem;
`;

const CabinImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 1rem;
  margin-bottom: 20px;
`;

const CabinDetails = styled.div`
  width: 100%;
  max-width: 600px;
`;
const StyledButton = styled.div`
  position: absolute;
  right: 10;
`;
const CabinTitle = styled.h1`
  font-size: 3.4rem;
  margin-bottom: 10px;
`;

const CabinDescription = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  text-align: left;
  margin-bottom: 20px;
`;
const CabinReviews = styled.span`
  color: #c1e00f;
  display: flex;
  align-items: center;
`;

const StarIcon = styled.span`
  margin-right: 4px;
  /* font-size: 1.rem; */
`;

const CabinInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CabinDiscount = styled.span`
  color: #cbce32;
`;

// const CabinReviews = styled.span`
//   color: #24b629;
// `;

export default function CabinPage() {
  const { isLoading, cabin } = useCabin();
  console.log(cabin);
  const moveBack = useMoveBack();
  if (isLoading) return <Spinner />;
  const renderStars = () => {
    const stars = [];
    const roundedReviews = Math.round(reviews);
    for (let i = 0; i < roundedReviews; i++) {
      stars.push(<StarIcon key={i}>★</StarIcon>);
    }
    return stars;
  };
  const {
    image,
    name,
    id,
    maxCapacity,
    description,
    discount,
    regularPrice,
    reviews,
  } = cabin;
  return (
    <div>
      <Row type="horizontal">
        <Heading as="h1">{name}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <PageContainer>
        <CabinImage src={image} alt={name} />
        <CabinDetails>
          <CabinTitle>Description</CabinTitle>
          <CabinDescription>{description}</CabinDescription>
          <CabinInfo>
            <div>
              <strong>Max Capacity:</strong> {maxCapacity}
            </div>
            <div>
              <strong>Regular Price:</strong> {regularPrice}
            </div>
            <div>
              <strong>Discount:</strong>{" "}
              <CabinDiscount>{discount}% OFF</CabinDiscount>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <strong>Reviews:</strong>{" "}
              <CabinReviews>
                {renderStars()} ({reviews} stars)
              </CabinReviews>
            </div>
          </CabinInfo>
        </CabinDetails>
      </PageContainer>
      <AddBooking />
    </div>
  );
}
