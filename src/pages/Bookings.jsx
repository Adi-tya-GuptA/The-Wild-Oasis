import BookingTable from "../features/bookings/BookingTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import { useUser } from "../features/authentication/useUser";
import MyBookings from "../features/bookings/MyBookings";

function Bookings() {
  const { user } = useUser();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        {user.user_metadata.role === "guest" || <BookingTableOperations />}
      </Row>
      {user.user_metadata.role === "guest" ? <MyBookings /> : <BookingTable />}
    </>
  );
}

export default Bookings;
