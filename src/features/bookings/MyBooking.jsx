import React, { useState } from "react";
import styled from "styled-components";
import { useCabin } from "../cabins/useCabin";
import SpinnerMini from "../../ui/SpinnerMini";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import StarRatings from "react-star-ratings";
import Table from "../../ui/Table";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import { format, isToday } from "date-fns";

const BookingCard = styled.div`
  border: 1px solid var(--color-grey-0);
  background-color: var(--color-grey-0);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 5rem auto;
  display: grid;
  grid-template-columns: 30rem repeat(2, 1fr);
  gap: 1rem;
  width: 70%;
  height: 23rem;
`;

const CabinImage = styled.img`
  width: 50rem;
  height: 23rem;
  border-radius: 8px 0 0 8px;
`;

const BookingDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
`;

const BookingInfo = styled.div`
  font-size: 1.5rem;
  line-height: 1.3;
  padding: 3rem 1.5rem;
`;

const StyledReview = styled.div`
  font-size: 2rem;
  margin-top: 1rem;
`;

const StyledRating = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-top: 1.5rem;

  .star-ratings {
    margin-right: 1rem;
  }
`;
const Img = styled.img`
  display: block;
  width: 8rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
  padding: 0.2rem;
`;
const StyledTag = styled.div`
  margin-top: 1rem;
`;
const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const StatusToTagName = {
  unconfirmed: "blue",
  "checked-in": "green",
  "checked-out": "silver",
};
const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 480px){
    font-size: .5rem;
  }

`;
const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
  @media only screen and (max-width: 480px){
    font-size: 1rem;
  }
`;

export default function MyBooking({ booking }) {
  const [userRating, setUserRating] = useState(0);
  const {
    cabinId,
    cabinPrice,
    isPaid,
    status,
    numGuests,
    numNights,
    observations,
    startDate,
    endDate,
    created_at,
    totalPrice,
  } = booking;
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  const { isLoading, cabin } = useCabin(cabinId);
  if (isLoading) return <SpinnerMini />;

  const { image, name, reviews } = cabin;
  const dateObject = new Date(startDate);
  const formattedDate = dateObject.toLocaleDateString();
  const dateEndObject = new Date(endDate);
  const formattedEndDate = dateEndObject.toLocaleDateString();
  const dateCreatedObject = new Date(created_at);
  const formattedCreatedDate = dateCreatedObject.toLocaleDateString();

  const handleRatingChange = (rating) => {
    // Handle the rating change and update the state
    setUserRating(rating);
  };

  return (
    <Table.Row>
      {/* <div>{cabinId}</div> */}
    {window.innerWidth > 600 &&   <Img src={image} alt="cabin image" />}
      {    <Cabin>{name}</Cabin>}
      <div>{formattedCreatedDate}</div>
     { <div>{numGuests}</div>}
      {/* <div>{totalPrice}</div> */}
      <Price>{formatCurrency(totalPrice)}</Price>
      {window.innerWidth>600&&<Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>
}
      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
    </Table.Row>
  );
}
/**
 *  <BookingCard>
      <CabinImage src={image} alt="Cabin Image" />
      <BookingDetails>
        <Heading as="h1">{name} room</Heading>
        <div>Total Guests: {numGuests}</div>
        <div>To: {formattedEndDate}</div>
        <div>From: {formattedDate}</div>
        <div>Total Price: {totalPrice}</div>
        <div>Booked on: {formattedCreatedDate}</div>
      </BookingDetails>
      <BookingInfo>
        <StyledTag>
          <Tag type={StatusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </StyledTag>
        <StyledReview>⭐{reviews}</StyledReview>
        {status === "checked-out" && (
          <StyledRating>
            <StarRatings
              rating={Number(reviews)}
              starDimension="20px"
              starSpacing="5px"
              starRatedColor="#FFD700"
            />
            <span>Leave a rating</span>
          </StyledRating>
        )}
      </BookingInfo>
    </BookingCard>
 */
