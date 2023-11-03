import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
 

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>TEST</p>
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
        {/* <Button onClick={() => setShowForm((show) => !show)}>
          Add new Cabin
        </Button>

        {showForm && <CreateCabinForm  setShowForm={setShowForm} showForm={showForm}/>} */}
      </Row>
    </>
  );
}

export default Cabins;
