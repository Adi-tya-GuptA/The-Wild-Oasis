import React from "react";
import { getGuests } from "../services/apiGuests";
import GuestList from "../features/guests/GuestList";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import AddGuests from "../features/guests/AddGuests";
import { useUser } from "../features/authentication/useUser";
import CreateGuestForm from "../features/guests/CreateGuestForm";

export default function Guests() {
  // const { data } = getGuests();
  // console.log(data);
  // const [details,setDetails]=useState(false);
  const { user } = useUser();
  return (
    <>
      <Row type="horizontal">
        {user.user_metadata.role === "guest" ? (
          <Heading as="h1">Guest Details</Heading>
        ) : (
          <Heading as="h1">All Guests</Heading>
        )}
      </Row>
      <Row>
        {!(user?.user_metadata?.role === "guest") ? (
          <>
            <GuestList />
            <AddGuests />
          </>
        ) : (
          <CreateGuestForm user={user} />
        )}
      </Row>
    </>
  );
}
