import BookingTable from "../features/bookings/BookingTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import { useUser } from "../features/authentication/useUser";

function Bookings() {
  const { user } = useUser();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>
      <BookingTable />
      {user.user_metadata.role === "user" && <p>hello i am user</p>}
    </>
  );
}

export default Bookings;
