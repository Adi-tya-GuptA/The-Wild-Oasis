import styled from "styled-components";
// import Button from "../../ui/Button";
// import ConfirmDelete from "../../ui/ConfirmDelete";
// import Modal from "../../ui/Modal";
// import Menus from "../../ui/Menus";
// import { HiPencil, HiTrash } from "react-icons/hi2";
// import { Flag } from 'ui/Flag';
import AddBooking from "../bookings/AddBooking";

const StyledGuestListItem = styled.li`
  display: grid;
  grid-template-columns: 0.7fr 1fr 1fr 1fr;
  gap: 0.8rem;
  align-items: center;
  padding: 0.6rem 2.5rem;
  transition: all 0.2s;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:hover {
    background-color: var(--color-grey-50);
    cursor: pointer;
  }
  @media only screen and (max-width: 480px) {
    gap: .5rem;
    padding: 0.4rem 1.4rem;
  }
`;

const ID = styled.div`
  /* justify-self: right; */
  font-size: 1.5rem;
  color: var(--color-grey-500);
  @media only screen and (max-width: 480px){
    font-size: 1.2rem;
  }
`;

function GuestListItem({ guest, onClick }) {
  // console.log(guest);
  return (
    <StyledGuestListItem onClick={() => onClick(guest)} role="button">
      <ID>{guest.id}</ID>
      <div>{guest.name}</div>
      <div>{guest.email}</div>
      {/* <Button>Create Booking</Button> */}
      <AddBooking id={guest.id} />
    </StyledGuestListItem>
  );
}

export default GuestListItem;
/**
 * countryFlag
: 
"https://flagcdn.com/pt.svg"
created_at
: 
"2023-11-30T08:50:32.118606+00:00"
email
: 
"hello@jonas.io"
id
: 
33
name
: 
"Jonas Schmedtmann"
nationalId
: 
null
nationality
: 
"Portugal"
 */
