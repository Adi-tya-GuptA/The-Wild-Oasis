import React from "react";
import styled from "styled-components";
import { IoMdPricetag } from "react-icons/io";
import { HiHome, HiUserGroup, HiStar, HiUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const StyledCard = styled.div`
  position: relative;
  background-color: var(--color-grey-0);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.7rem;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  transform: scale(0.95);
  cursor: pointer;
  /* filter: brightness(.8) grayscale(0.2) contrast(1); */
  &:hover {
    transform: scale(1);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0.7rem;
  position: relative;
  transition: filter 0.3s ease-in-out;
  ${StyledCard}:hover & {
    filter: brightness(0.7) grayscale(0.5) contrast(1.2);
  }
`;

const TypeBadge = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  color: #ffffffe8;
  position: absolute;
  bottom: 4.8rem;
  left: 1.5rem;
  margin-bottom: 5px;
`;

const DiscountBadge = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background-color: #c09f0b;
  color: var(--color-yellow-700);
  color: white;
  padding: 6px 9px;
  font-weight: bold;
  z-index: 3;
`;

const Div = styled.div`
  margin: 1.7rem auto 0;
`;
const StyledIcon = styled.div`
  font-size: 2.2rem;
`;
const StyledRating = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  color: white;
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;
const StyledPrice = styled.div`
  font-size: 3.2rem;
  font-weight: 600;
  color: #dab40d;
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;
`;

const StyledCapacity = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  color: white;
  position: absolute;
  bottom: 5rem;
  right: 1.5rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export default function CabinCard({ cabin }) {
  const { image, name, id, maxCapacity, discount, regularPrice, reviews } =
    cabin;
    const navigate = useNavigate();

  return (
    <StyledCard
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0)), url(${image})`,
        backgroundSize: "cover",
      }}
      onClick={()=>navigate(`/cabins/${id}`)}
    >
      <DiscountBadge>{discount}% OFF</DiscountBadge>
      <TypeBadge>{name} room</TypeBadge>
      <StyledPrice>Rs. {regularPrice}/-</StyledPrice>
      <StyledRating>
        <StyledIcon style={{ color: "yellow" }}>{<HiStar />}</StyledIcon>
        {reviews}
      </StyledRating>
      <StyledCapacity>
        <StyledIcon>{<HiUser />}</StyledIcon>
        {maxCapacity}
      </StyledCapacity>
    </StyledCard>
  );
}
/***
 *       <Div>
        {/* <StyledData>
          <StledValue>
            <div>{<HiHome />}</div>
            <div>{name}</div>
          </StledValue>
        </StyledData> */
//   <StyledData>
//     <StledValue>
//       <StyledIcon>{<HiUserGroup />}</StyledIcon>
//       <div>{maxCapacity}</div>
//     </StledValue>
//   </StyledData>
//   <StyledData>
//     <StledValue>
//       <StyledIcon>{<IoMdPricetag />}</StyledIcon>
//       <div>{regularPrice}</div>
//     </StledValue>
//   </StyledData>
//   <StyledData>
//     <StledValue>
//       <StyledIcon>{<HiStar />}</StyledIcon>
//       <div>{Number(reviews) || 0}</div>
//     </StledValue>
//   </StyledData>
// </Div>
