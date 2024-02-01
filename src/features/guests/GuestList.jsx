import styled from "styled-components";
import { useGuests } from "./useGuests";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import GuestListItem from "./GuestListItem";
import Heading from "../../ui/Heading";

import Table from "../../ui/Table";
const StyledGuestList = styled.div`
  border: 1px solid var(--color-grey-200);
  border-top: none;
  border-bottom-left-radius: var(--border-radius-md);
  border-bottom-right-radius: var(--border-radius-md);
  overflow: hidden;
  padding-top: 0.8rem;
  transform: translateY(-4px);
`;

const List = styled.ul``;

function GuestList({ onClick }) {
  const { isLoading, guests, count } = useGuests();
  // console.log(count, 22);

  if (isLoading) return <Spinner />;
  // if (count === undefined) return null;padding: 1.2rem 1.6rem
  // if (count === 0) return <p>No guests found...</p>;

  return (
    <>
      {/* <Heading as="h1">Guests</Heading> */}
      <Table columns={window.innerWidth > 600?" 0.7fr 1fr 1fr 1fr":" 0.7fr 1fr 1fr 1fr"}>
        <Table.Header>
          <div>ID</div>
          {/* <div>Guest</div> */}
          <div>Guest Name</div>
          {/* <div>Status</div> */}
          {<div>Email Id</div>}
          <div>Action</div>
        </Table.Header>

        <List>
          {/* {guests.map((guest) => (
          <GuestListItem
            key={guest.id}
            guest={guest}
            // For case where GuestList was used without the onClick function
            onClick={onClick ? onClick : () => {}}
          />
        ))} */}
          <Table.Body
            data={guests}
            render={(guest) => (
              <GuestListItem
                key={guest.id}
                guest={guest}
                // For case where GuestList was used without the onClick function
                onClick={onClick ? onClick : () => {}}
              />
            )}
          />
          <Table.Footer>
            {/* {user.user_metadata.role === "guest" && <p>i am guest</p>} */}
            <Pagination count={count} />
          </Table.Footer>
        </List>
      </Table>
    </>
  );
}

export default GuestList;
