import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateBookingForm from "./CreateBookingForm";

function AddBooking({ id }) {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add Booking</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateBookingForm id={id} onCloseModal={Modal.close} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add New Cabin
//       </Button>

//       {isOpenModal && <Modal onClose={()=>setIsOpenModal((show) => !show)}>
//         <CreateCabinForm onClose={()=>setIsOpenModal((show) => !show)}/>
//         </Modal>}
//     </div>
//   );
// }

export default AddBooking;
/**
 *  <Modal.Toggle opens="new-cabin">
        <Button>Add new cabin</Button>
      </Modal.Toggle>
      <Modal.Window name="new-cabin">
        <CreateCabinForm />
      </Modal.Window>
 */
