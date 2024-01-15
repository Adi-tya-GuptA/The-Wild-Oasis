import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateGuestForm from "./CreateGuestForm";

function AddGuests() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="guest-form">
          <Button>Add New Guest</Button>
        </Modal.Open>
        <Modal.Window name="guest-form">
          <CreateGuestForm onCloseModal={Modal.close} />
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

export default AddGuests;
/**
 *  <Modal.Toggle opens="new-cabin">
        <Button>Add new cabin</Button>
      </Modal.Toggle>
      <Modal.Window name="new-cabin">
        <CreateCabinForm />
      </Modal.Window>
 */
