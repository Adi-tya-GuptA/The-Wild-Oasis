import React from "react";
import { useMyBooking } from "./useMyBooking";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import styled from "styled-components";
import MyBooking from "./MyBooking";

const styledDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  position: relative;
`;

export default function MyBookings() {
  const { isLoading, error, bookings } = useMyBooking();
  if (isLoading) return <Spinner />;
  if (error) return <Empty resource={"bookings"} />;
  console.log(bookings, "myBooking");
  return (
    <styledDiv>
      {bookings.map((booking) => (
        <MyBooking booking={booking} />
      ))}
    </styledDiv>
  );
}
