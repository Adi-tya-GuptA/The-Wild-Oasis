import React from "react";
import { getGuests } from "../services/apiGuests";
import GuestList from "../features/guests/GuestList";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import AddGuests from "../features/guests/AddGuests";

export default function Guests() {
  const { data } = getGuests();
  console.log(data);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Guests</Heading>
     
      </Row>
      <Row>
        <GuestList />
        <AddGuests />
      </Row>
    </>
  );
}
