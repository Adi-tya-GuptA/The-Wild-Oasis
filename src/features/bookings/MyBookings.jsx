import React from "react";
import { useMyBooking } from "./useMyBooking";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import styled from "styled-components";
import Table from "../../ui/Table";
import MyBooking from "./MyBooking";

const styledHeader = styled.div`
  padding-left: 2rem;
`;

export default function MyBookings() {
  const { isLoading, error, bookings } = useMyBooking();
  if (isLoading) return <Spinner />;
  if (error) return <Empty resource={"bookings"} />;
  console.log(bookings, "myBooking");
  return (
    <Table
      columns={
        window.innerWidth > 600
          ? "  1.5fr 1fr 1fr 1fr 1.2fr 2fr 1.8fr"
          : " 1fr 1fr .5fr 1fr 2fr"
      }
    >
      <Table.Header>
        {/* {window.innerWidth > 600 &&  <div>Cabin</div>} */}
        {/* <div>Guest</div> */}
        {/* {window.innerWidth > 600 && <div>Dates</div>} */}
        {/* <div>No.</div> */}
        <div>Cabin</div>
        {window.innerWidth > 600 && <div>Type</div>}
        <div>Booked On</div>
        {<div>Guests</div>}
        <div>Price</div>
        {window.innerWidth > 600 && <div>Date</div>}
        <div>Status</div>
        {/* <div></div> */}
      </Table.Header>
      <Table.Body
        data={bookings}
        render={(booking) => (
          <MyBooking booking={booking} key={booking.id} />
          // {console.log(object)}
        )}
      />
    </Table>
  );
}
/**
 *  {bookings.map((booking) => (
        <MyBooking booking={booking} />
      ))}
 */
