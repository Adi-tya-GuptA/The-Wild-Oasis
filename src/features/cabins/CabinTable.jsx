import React from "react";

import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

export default function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();
  // console.log(cabins);
  if (isLoading) {
    return <Spinner />;
  }
  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  console.log(sortBy);
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );
  return (
    <Menus>
      <Table
        columns={
          window.innerWidth < 600
            ? " 3fr 2fr 2fr 1.5fr 1fr"
            : "1fr 1.8fr 2.2fr 1fr 1fr 1fr"
        }
      >
        <Table.Header role="row">
          {window.innerWidth > 600 && <div></div>}
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div>Action</div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}
