import React, { useState } from "react";
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const ButtonDel = styled.button`
  background-color: #f32222;
  color: white;
  font-weight: 400;
  padding: 4px 2px;
  border: none;
  width: 75%;
  border-radius: 5%;
  outline: none;

  &:hover {
    background-color: #e74848;
  }
`;
const ButtonEdit = styled.button`
  background-color: #2d61d3;
  color: white;
  font-weight: 400;
  padding: 4px 2px;
  border: none;
  width: 75%;
  border-radius: 5%;
  outline: none;

  &:hover {
    background-color: #5f90cf;
  }
`;
export default function CabinRow({ cabin }) {
  const [showFrom, setShowForm] = useState(false);
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;
  const { isLoading, deletCabin } = useDeleteCabin();
  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{discount ? formatCurrency(discount) : "-"}</Discount>
        <Buttons>
          <ButtonEdit onClick={() => setShowForm((show) => !show)}>
            Edit
          </ButtonEdit>
          <ButtonDel onClick={() =>deletCabin(id)} disabled={isLoading}>
            Delete
          </ButtonDel>
        </Buttons>
      </TableRow>
      {showFrom && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}
