import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Spinner from "../../ui/Spinner";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonText from "../../ui/ButtonText";
import { useMoveBack } from "../../hooks/useMoveBack";
import Tag from "../../ui/Tag";
import { useBooking } from "./useBooking";
import Empty from "../../ui/Empty";
import Button from "../../ui/Button";
// import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import { useCheckout } from "../check-in-out/useCheckout";
import { HiArrowUpOnSquare } from "react-icons/hi2";
// import Modal from "../../ui/Modal";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  // const {  isLoading, error, booking,id} = useBooking();
  const {booking,isLoading}=useBooking();
  const {checkout,isCheckingOut}=useCheckout();
  // const { mutate: deleteBooking, isLoading: isDeleting } = useDeleteBooking();
  // const { mutate: checkout, isLoading: isCheckingOut } = useCheckout();
  console.log(booking, 22, "bookingDetails");
  const navigate = useNavigate();
  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;
  if (!booking) return <Empty resource='booking' />;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  const { id, status } = booking;
  console.log(id,status, 36, "bookingDetail");
  // We return a fragment so that these elements fit into the page's layout
  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading type="h1">Booking #{id}</Heading>
          <Tag type={statusToTagName[status]}>{status?.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${id}`)}>
            Check in
          </Button>
        )}

         {status === "checked-in" && (
          <Button onClick={() => checkout(id)} disabled={isCheckingOut} icon={<HiArrowUpOnSquare/>}>
            Check out
          </Button>
        )} 
{/* 
        <Modal>
          <Modal.Toggle opens="delete">
            <Button variation="danger">Delete booking</Button>
          </Modal.Toggle>
          <Modal.Window name="delete">
            <ConfirmDelete
              resource="booking"
              // These options will be passed wherever the function gets called, and they determine what happens next
              onConfirm={(options) => deleteBooking(id, options)}
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal> */}

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
