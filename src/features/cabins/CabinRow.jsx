import React, { useState } from "react";
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

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
      <Table.Row role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{discount ? formatCurrency(discount) : "-"}</Discount>
        <Buttons>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={id} />

              <Menus.List id={id}>
                <Modal.Open opens="edit">
                  {/* <ButtonEdit>Edit</ButtonEdit> */}
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                </Modal.Open>
                <Modal.Open opens="delete">
                  {/* <ButtonDel>Delete</ButtonDel> */}
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>
            </Menus.Menu>

            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabin"
                disabled={isLoading}
                onConfirm={() => deletCabin(id)}
              />
            </Modal.Window>
          </Modal>
        </Buttons>
      </Table.Row>
    </>
  );
}
