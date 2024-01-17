import Heading from "../ui/Heading";
import Row from "../ui/Row";

import CabinTable from "../features/cabins/CabinTable";

import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import { useUser } from "../features/authentication/useUser";
import ViewCabins from "../features/cabins/ViewCabins";

function Cabins() {
  const { user } = useUser();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        {user.user_metadata.role === "guest" || <CabinTableOperations />}
      </Row>
      <Row>
        {user.user_metadata.role === "guest" || (
          <>
            <CabinTable />
            <AddCabin />
          </>
        )}
        {user.user_metadata.role === "guest" && <ViewCabins />}
      </Row>
    </>
  );
}

export default Cabins;
